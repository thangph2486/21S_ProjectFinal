const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const CardsService = require('./script')

const cardS = new CardsService()
let cards = cardS.CARDS
let users = []

const documents = {};

io.on("connection", socket => {
    let previousId;
    users.push(socket.id)
    console.log(`User [${socket.id}] is connect.`)
    socket.emit('getID', socket.id)

    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
    };

    socket.on('join', () => {
        io.of('/').in('123').clients(function (error, clients) {
            let numClients = clients.length;
            if (numClients <= 3) {
                safeJoin('123')

            } else {

            }
        });


    })



    socket.on('letStart', () => {

        io.of('/').in('123').clients(function (error, clients) {
            console.log(clients)
            let cardTemp = cardS.dealCarts(cardS.shuffleArray(cardS.CARDS), clients.length)
            for (let i = 0; i < clients.length; i++) {
                io.to(clients[i]).emit("gameData", cardTemp[i]);
            }

        });
    })


    // socket.on('danhBai', (data)=>{
    //     io.of('/').in('123').clients(function(error,clients){
            
    //     }
    // })

    socket.on("getDoc", docId => {
        safeJoin(docId);
        socket.emit("document", documents[docId]);
    });

    socket.on("addDoc", doc => {
        documents[doc.id] = doc;
        safeJoin(doc.id);
        io.emit("documents", Object.keys(documents));
        //socket.emit("document", doc);
    });

    socket.on("editDoc", doc => {
        documents[doc.id] = doc;
        socket.to(doc.id).emit("document", doc);
    });

    socket.on('disconnect', function () {
        users.splice(users.indexOf(socket.id), 1)
        console.log(`User [${socket.id}] is disconnect.`)
        console.log(users)
    });

    //io.emit("documents", Object.keys(documents));
    io.emit("users", Object.keys(documents));

});

http.listen(3000, () => {
    console.log('listening on *:3000');
});