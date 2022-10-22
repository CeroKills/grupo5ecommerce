const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Servidor Funcionando')
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/header.html'));
});
*/

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registro.html'));
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'));
});

app.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/producto.html'));
});
