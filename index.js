const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, './public'); 
app.use(express.static(publicPath));

app.listen(3090, ()=> console.log('Servidor OK - THE NFT MARKET - 3090'));