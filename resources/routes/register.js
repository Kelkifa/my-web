const express = require('express');
const RegisterController = require('../app/controllers/RegisterController');
const router = express.Router();

router.post('/process', RegisterController.process);
router.get('/', RegisterController.index);

module.exports = router;