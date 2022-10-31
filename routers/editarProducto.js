let express = require('express');
let editarController = require('../controllers/editarController');
let router = express.Router();

router.get('/', editarController.index)

module.exports = router;
