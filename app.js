var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));


// gestionamos las consultas
app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(3000, function() {
    console.log('Escuchando el el puerto 3000');
});