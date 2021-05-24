const express = require('express');
const LogoutController = require('../app/controllers/LogoutController');
const router = express.Router();

router.get('/', LogoutController.index);

module.exports = router;