const express = require('express');
const HomeController = require('../app/controllers/HomeController');
const router = express.Router();

router.get('/home', HomeController.index);
router.get('/', HomeController.index);

module.exports = router;