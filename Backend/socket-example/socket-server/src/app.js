const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const CardsService = require('./script')

const cardS = new CardsService()
let cards = cardS.CARDS
const documents = {};
let user = []
io.on("connection", socket => {
    //let previousId;

    // const safeJoin = currentId => {
    //     socket.leave(previousId);
    //     socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
    //     previousId = currentId;
    // };


    user.push(socket.id)
    console.log(`User [${socket.id}] is connect.`)
    socket.on("getDoc", docId => {
        //safeJoin(docId);
        socket.emit("document", documents[docId]);
    });

    socket.on("addDoc", doc => {
        documents[doc.id] = doc;
        //safeJoin(doc.id);
        io.emit("documents", Object.keys(documents));
        socket.emit("document", doc);
    });

    socket.on("editDoc", doc => {
        documents[doc.id] = doc;
        socket.to(doc.id).emit("document", doc);
    });

    socket.on('disconnect', function () {
        user.splice(user.indexOf(socket.id), 1)
        console.log(`User [${socket.id}] is disconnect.`)
        console.log(user)
    });

    io.emit("documents", Object.keys(documents));
});

http.listen(3000, '0.0.0.0', () => {
    console.log('listening on *:3000');
});