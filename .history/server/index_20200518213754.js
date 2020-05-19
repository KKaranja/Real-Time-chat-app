const express = require ("express");
const socketio = require("socket.io");
const cors = require("cors");
const http = require("http");

const PORT =  process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);



server.listen(PORT, () => console.log(`Sever has started on port ${PORT}`));
