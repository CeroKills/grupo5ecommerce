const path=require('path');

const productoController={
    index: (req, res) =>{
        res.render('producto');
    }
}

module.exports = productoController;