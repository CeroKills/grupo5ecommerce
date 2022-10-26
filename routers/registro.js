let express = require('express');
let registroController = require('../controllers/registroController');
let router = express.Router();

router.get('/', registroController.index)

module.exports = router;
