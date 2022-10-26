const path=require('path');

const registroController={
    index: (req, res) =>{
        res.render('registro');
    }
}

module.exports = registroController;