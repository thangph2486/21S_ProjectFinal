const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const { rootCertificates } = require("tls");
const CardsService = require("./script");
const Room = require('./room');
const { Socket } = require("dgram");
const cardS = new CardsService();
const roomS = new Room();

let room = {
    r120: {//Example
        roomId: 'r120',
        players: [12312312312312],
        isPlaying: false,
        playerFirstStart: '',
        cardOut: []
    },
}
let roomForAllUser = {
    r120: {
        roomId: 'r120',
        playerNum: 1
    }

}
let publicInRoom = [
    //{uid:uid,sid:sid}
]
let users = {
    12312312312312: {
        inRoom: 'r120',
        id: '12312312312312',
        isPlaying: false,
        cards: ['', ''],
        inTurn: false,
    },
};

function a() {
    console.log('*****************')
    console.log({ roomsPublic: roomForAllUser })
    console.log({ rooms: room })
    console.log({ users: users })
}

const documents = {};

io.on("connection", (socket) => {
    let previousId;
    users[socket.id] = {
        inRoom: "",
        id: socket.id,
        isPlaying: false,
        cards: [],
        inTurn: false,
    };
    console.log(`User [${socket.id}] is connect.`);
    socket.emit("getID", socket.id);

    const safeJoin = (currentId) => {
        socket.leave(previousId);
        socket.join(currentId, () => {
            console.log(`Socket ${socket.id} joined room ${currentId}`);
        });
        previousId = currentId;
    };

    socket.on("join", (roomId) => {
        console.log('join')
        if (!room[roomId]) {
            socket.emit("canJoin", 'not found');
        }
        else {
            io.of("/")
                .in(roomId)
                .clients(function (error, clients) {
                    if (room[roomId].players.length < 4) {
                        console.log(`socketId [${socket.id}] joined room.`);
                        users[socket.id].inRoom = roomId;
                        socket.emit("canJoin", true);

                        //change rooms Array
                        room[roomId].players.push(socket.id)
                        roomForAllUser[roomId].playerNum += 1
                        //send userInfo
                        publicInRoom.push({ uid: socket.id, sid: socket.id })
                        io.of("/").in(roomId).clients(function (error, clients) {
                            console.log(clients)
                        });
                        io.emit("rooms", roomForAllUser);

                        a();
                    } else {
                        socket.emit("canJoin", false);
                    }
                });
        }
    });

    socket.on("letStart", (roomID) => {
        try {
            let usersTemp = [];
            usersTemp = room[roomID].players;
            if (usersTemp[0] == socket.id || usersTemp > 1) {
                io.of("/")
                    .in(roomID)
                    .clients(function (error, clients) {
                        let card = cardS.CARDS.slice();
                        let cardTemp = cardS.dealCarts(
                            cardS.shuffleArray(card),
                            usersTemp.length
                        );
                        for (let i = 0; i < usersTemp.length; i++) {
                            io.to(usersTemp[i]).emit("gameData", cardTemp[i]);
                        }
                    });
            }
        } catch (error) {
            console.log("error");
        }
    });

    socket.on("disconnect", function () {
        console.log(`User [${socket.id}] is disconnect.`)
        let rid = users[socket.id].inRoom;
        delete users[socket.id];
        //Delete user in room
        if (rid != "") {
            for (let i = 0; i < room[rid].players.length; i++) {
                if (room[rid].players[i] == socket.id) {
                    room[rid].players.splice(i, 1);
                }
            }
            roomForAllUser[rid]['playerNum'] -= 1

            if (roomForAllUser[rid]['playerNum'] == 0) {
                delete room[rid]
                delete roomForAllUser[rid]
            }
        }
        io.emit('rooms', roomForAllUser)
        a()
    });

    socket.on("debug", doc => {
        documents[doc.id] = doc;
    });
    //io.emit("documents", Object.keys(documents));

    //Start ROOM
    socket.on('createRoom', (newRoomID) => {
        if (room[newRoomID] == null) {
            room[newRoomID] = {
                roomId: newRoomID,
                players: [socket.id],
                isPlaying: false,
                playerFirstStart: '',
                cardOut: []
            }
            roomForAllUser[newRoomID] = {
                roomId: newRoomID,
                playerNum: 1
            }

            socket.emit('canCreateRoom', true)
            io.emit("rooms", roomForAllUser);
        }
        else {
            socket.emit('canCreateRoom', false)
        }
        a()
    })

    io.emit("rooms", roomForAllUser);
    //End   ROOM


    a()
    io.emit("users", Object.keys(documents));
    socket.on("debug", (doc) => {
        documents[doc.id] = doc;
    });
    //io.emit("documents", Object.keys(documents));
    a();
    io.emit("users", Object.keys(documents));
});

http.listen(3000, '0.0.0.0', () => {
    console.log("listening on *:3000");
});
