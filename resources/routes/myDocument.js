const express = require('express');
const MyDocumentController = require('../app/controllers/MyDocumentController');
const router = express.Router();

router.delete('/:id/delete', MyDocumentController.softDelete);
router.put('/:id/update', MyDocumentController.update);
router.get('/:id/update-form', MyDocumentController.updateForm);
router.post('/store', MyDocumentController.store);
router.get('/', MyDocumentController.index);

module.exports = router;