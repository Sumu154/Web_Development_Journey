const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const { createServer } = require('http');
const { Server }= require('socket.io');


const app = express(); //for http request -> app
app.set('View engine', 'ejs');
app.use(cors({
  origin: [
    'http://localhost:5173',
  ],
  credentials: true,
}));

const server = createServer(app);  // real time socket -> server
const io = new Server(server, {
  cors: {
  origin: [
    "http://localhost:5173"
  ],
  methods: ["GET", "POST"],
  credentials: true
}})


app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 3000;





// Socket.io logic
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('message', (msg) => {
    console.log('Received from client:', msg);
    socket.emit('message', 'Server received: ' + msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});



app.get('/', (req, res) => {
  res.send('hello.....assignment 12 hbe ki?')
})

server.listen(port, () => {
  console.log(`server is running at port ${port} `)
})