let express = require('express');
let loginController = require('../controllers/loginController');
let router = express.Router();

router.get('/', loginController.index)

module.exports = router;
