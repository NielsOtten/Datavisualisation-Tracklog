var socket = io();
socket.on('New location', function (location) {
    console.log(location);
})