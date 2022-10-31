const path = require('path');

const editarController = {
    index: (req, res) => {
        res.render('../views/productos/editarProducto');
    }
}

module.exports = editarController;