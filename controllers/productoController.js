const path=require('path');

const productoController={
    index: (req, res) =>{
        res.render('../views/productos/producto');
    }
}

module.exports = productoController;