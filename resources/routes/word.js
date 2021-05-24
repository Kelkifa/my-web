const express = require('express');
const wordController = require('../app/controllers/wordController');
const router = express.Router();

router.post('/store', wordController.store);
router.get('/', wordController.index);

module.exports = router;