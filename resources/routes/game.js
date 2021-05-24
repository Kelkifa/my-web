const express = require('express');
const GameController = require('../app/controllers/GameController');
const router = express.Router();

router.get('/', GameController.index);

module.exports = router;