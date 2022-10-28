const express = require('express');
const app = express();
let ejs = require('ejs');
const rutasHome = require('./routers/home.js');
const rutasCarrito = require('./routers/carrito.js');
const rutasLogin = require('./routers/login.js');
const rutasProducto = require('./routers/producto.js');
const rutasRegistro = require('./routers/registro.js');

app.set('view engine', 'ejs');

const path=require('path');
const publicPath=path.join(__dirname,'/public');
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Servidor Funcionando')
});



app.use('/', rutasHome);

app.use('/carrito', rutasCarrito);

app.use('/login', rutasLogin);

app.use('/producto', rutasProducto);

app.use('/registro', rutasRegistro);



module.exports = app;
