var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const { Alert } = require('react-native-web');
const server = require('http').createServer(app);

app.get('/', function (req, res) {
    respond('index.html');
});

io.on('connection', function (socket) {
    console.log('user connected');
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
