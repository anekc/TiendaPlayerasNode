var express = require('express');
var fs = require('fs');
var app = express();

const pug = require('pug');

app.use(express.static(__dirname + '/public'));

camisetasLista = [{
        color: "Naranja",
        imagen: "/images/camiseta1.png"
    },
    {
        color: "Roja",
        imagen: "/images/camiseta2.png"
    },
    {
        color: "Azul",
        imagen: "/images/camiseta3.png"
    },
    {
        color: "Verde",
        imagen: "/images/camiseta4.png"
    }
];


// gestionamos las consultas
app.get('/', function(req, res) {
    res.render('index.pug', {
        titulo: "Test",
        textoParrafo: "Nuestra tienda de camisetas ofrece lo mejor, satisfacción 100% ",
    });
});

app.get('/tienda.html', function(req, res) {
    res.render('tienda.pug', {
        camisetas: camisetasLista
    });
});

app.get('/tienda/comprar/:color', function(req, res) {
    let datosCamiseta = camisetasLista.filter(function(item) {
        if (req.params.color == item.color) {
            return item;
        }
    })[0];
    res.render('detalles.pug', {
        color: req.params.color,
        datos: datosCamiseta
    });
});

app.use(function(req, res) {
    res.status(400);
    let URLerror = req.originalUrl;
    res.render('404.pug', { textoError: URLerror });
});

app.listen(3000, function() {
    console.log('Escuchando el el puerto 3000');
});