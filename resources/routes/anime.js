const express = require('express');
const AnimeController = require('../app/controllers/AnimeController');
const router = express.Router();

router.get('/', AnimeController.index);

module.exports = router;