const express = require('express');
const LoginController = require('../app/controllers/LoginController');
const router = express.Router();

router.post('/process', LoginController.process);
router.get('/', LoginController.index);

module.exports = router;