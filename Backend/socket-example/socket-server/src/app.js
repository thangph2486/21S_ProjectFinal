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

    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
    };

    users.push(socket.id)
    console.log(`User [${socket.id}] is connect.`)
    socket.emit('getID', socket.id)

    socket.on('letStart', () => {
        let cardTemp = cardS.dealCarts(cardS.shuffleArray(cardS.CARDS), users.length)
        //safeJoin(doc.id);
        //io.emit("gameData", Object.keys({ cards: cardTemp }));

        //io.emit("gameData", cardTemp);
        io.to(users[0]).emit("gameData", cardTemp[0]);
        io.to(users[1]).emit("gameData", cardTemp[1]);


    })



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

http.listen(3000, '0.0.0.0', () => {
    console.log('listening on *:3000');
});