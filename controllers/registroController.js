const path=require('path');

const registroController={
    index: (req, res) =>{
        res.render('../views/usuarios/registro');
    }
}

module.exports = registroController;