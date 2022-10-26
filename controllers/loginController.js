const path=require('path');

const loginController={
    index: (req, res) =>{
        res.render('../views/usuarios/login');
    }
}

module.exports = loginController;