var express = require('express');
var fs      = require('fs');
var app     = express();
var server  = app.listen(80);
var io      = require('socket.io').listen(server);
app.use(express.static(__dirname));

var json    = JSON.parse(fs.readFileSync('data/entries.json', 'utf-8')).items;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('user connected');
});

app.listen(8080);

var i = 0;
setInterval(function() {
    var item = json[i] != undefined && (item.location.lat != "" && item.location.lng != "" ) ? json[i] : json[0];
    io.emit('New location', item);
    i++;
}, 10000);
