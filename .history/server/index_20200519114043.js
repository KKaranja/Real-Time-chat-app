const express = require ("express");
const socketio = require("socket.io");
const cors = require("cors");
const http = require("http");

const { addUser, removeUser, getUser , getUsersInRoom} = require ("./users");

const PORT =  process.env.PORT || 5000;

const router = require("./router");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});

io.on('connection', (socket) =>{
    socket.on('join', ({name, room}, callback) =>{
        const {error, user} = addUser({ id: socket.id, name, room});

        if(error) return callback(error);

        socket.emit('message', {user: "admin", text: `${user.name}, Welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user: "admin", text: `${user.name}, has joined!`});
        socket.join(user.room);

       callback();
    });

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("message", {user: user.name, text: message});

        callback();
    })

    socket.on('disconnect', () =>{
        console.log("User had Left!!!");
    })
});


app.use(router);



server.listen(PORT, () => console.log(`Sever has started on port ${PORT}`));
