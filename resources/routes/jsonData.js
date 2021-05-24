const express = require('express');
const JsonDataController = require('../app/controllers/JsonDataController');
const router = express.Router();

router.get('/anime', JsonDataController.anime);

module.exports = router;