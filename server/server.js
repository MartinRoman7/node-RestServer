require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Main
app.get('/', function(req, res) {
    res.json('Hello World')
})

// Método get
app.get('/usuario', function(req, res) {
    res.json('GET Method')
})

// Método post (crear registros)
// app.post('/usuario', function(req, res) {
//     res.json('POST Method')
// })

// Método put (actualizar registros)
app.put('/usuario', function(req, res) {
    res.json('PUT Method')
})

// Método delete (cambiar estado de registros)
app.delete('/usuario', function(req, res) {
    res.json('DELETE Method')
})

// Método put (actualizar registros con id)
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    });
})

// Método post (crear registros usando bodyParser)
app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }

})

// Variable global = process.env.PORT
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', 3000);
})