let express = require('express');
let productoController = require('../controllers/productoController');
let router = express.Router();

router.get('/', productoController.index)

module.exports = router;
