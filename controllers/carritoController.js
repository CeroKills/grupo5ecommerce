const path=require('path');

const carritoController={
    index: (req, res) => {
        res.render('carrito')
    }
}

module.exports = carritoController;