const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { rootCertificates } = require('tls');
const CardsService = require('./script')

const cardS = new CardsService()

let room = {
    r123: {//Example
        roomId: 'r123',
        players: [],
        isPlaying: false,
        playerFirstStart: '',
        cardOut: []
    },
}
let publicValue = {
    //user:['lzTxZn9vcWWzywXNAAA5', '0RbojUK4uC2XGgt5AAA4'],
    //outCard:[],
    //numCard:[13,11]
}
let users = {
    // hduc: {//Example
    //     inRoom: '',
    //     id: 'hduc',
    //     isPlaying: false,
    //     cards: ['', ''],
    //     inTurn: false,
    //     can

    //      
    // },
}

function a() {
    console.log('-------------------------------------------------------------------')
    console.log({ rooms: room })
    console.log({ users: users })
}
function getLength(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

const documents = {};

io.on("connection", socket => {
    let previousId;
    users[socket.id] = {
        inRoom: '',
        id: socket.id,
        isPlaying: false,
        cards: [],
        inTurn: false,
    }
    //console.log(`User [${socket.id}] is connect.`)
    socket.emit('getID', socket.id)

    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => {
            console.log(`Socket ${socket.id} joined room ${currentId}`)
        });
        previousId = currentId;
    };

    socket.on('join', (roomId) => {
        io.of('/').in(roomId).clients(function (error, clients) {
            if (room[roomId].players.length < 4) {
                console.log(`socketId [${socket.id}] joined room.`)
                room[roomId].players.push(socket.id)
                users[socket.id].inRoom = roomId
                socket.emit('canJoin', true)
                a()
            }
            else {
                socket.emit('canJoin', false)
            }
        });
    })

    socket.on('letStart', (roomID) => {
        try {
            let usersTemp = []
            usersTemp = room[roomID].players
            if (usersTemp[0] == socket.id || usersTemp > 1) {
                io.of('/').in(roomID).clients(function (error, clients) {
                    let card = cardS.CARDS.slice()
                    let cardTemp = cardS.dealCarts(cardS.shuffleArray(card), usersTemp.length)
                    for (let i = 0; i < usersTemp.length; i++) {
                        io.to(usersTemp[i]).emit("gameData", cardTemp[i]);
                    }
                });
            }
        } catch (error) {
            console.log('error')
        }
    })



    // socket.on("getDoc", docId => {
    //     safeJoin(docId);
    //     socket.emit("document", documents[docId]);
    // });

    // socket.on("addDoc", doc => {
    //     documents[doc.id] = doc;
    //     safeJoin(doc.id);
    //     io.emit("documents", Object.keys(documents));
    //     //socket.emit("document", doc);
    // });

    // socket.on("editDoc", doc => {
    //     documents[doc.id] = doc;
    //     socket.to(doc.id).emit("document", doc);
    // });

    socket.on('disconnect', function () {
        //console.log(`User [${socket.id}] is disconnect.`)
        let rid = users[socket.id].inRoom
        delete users[socket.id]
        //Delete user in room
        if (rid != '') {
            for (let i = 0; i < room[rid].players.length; i++) {
                if (room[rid].players[i] == socket.id) {
                    room[rid].players.splice(i, 1)
                }
            }
        }

        a()
    });

    socket.on("debug", doc => {
        documents[doc.id] = doc;
    });
    //io.emit("documents", Object.keys(documents));

    //Start ROOM
    socket.on('createRoom', (newRoomID) => {
        if (room[newRoomID] == null) {
            room[newRoomID] = {//Example
                roomId: newRoomID,
                players: [],
                isPlaying: false,
                playerFirstStart: '',
                cardOut: []
            }
            socket.emit('canCreateRoom', true)
        }
        else {
            socket.emit('canCreateRoom', false)
        }
        a()
    })
    //End   ROOM

    a()
    io.emit("users", Object.keys(documents));


});

http.listen(3000, () => {
    console.log('listening on *:3000');
});