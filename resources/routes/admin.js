const express = require('express');
const AdminController = require('../app/controllers/AdminController');
const router = express.Router();

router.get('/manage/animes/:id/update', AdminController.updateAnime);
router.get('/manage/words/:id/update', AdminController.updateWord);
router.patch('/manage/animes/:id/delete', AdminController.softDeleteAnime);
router.patch('/manage/words/:id/delete', AdminController.softDeleteWord);
router.delete('/manage/animes/:id/force-delete', AdminController.animeForceDelete);
router.delete('/manage/words/:id/force-delete', AdminController.wordForceDelete);
router.patch('/manage/animes/:id/restore', AdminController.restoreAnime);
router.patch('/manage/words/:id/restore', AdminController.restoreWord);
router.get('/manage/animes/trash', AdminController.animeTrash);
router.get('/manage/words/trash', AdminController.wordTrash);
router.get('/manage/words', AdminController.manageWord);
router.get('/manage/animes', AdminController.manageAnime);
router.post('/store-anime', AdminController.storeAnime);
router.get('/create-anime', AdminController.createAnime);
router.get('/create-word', AdminController.createWord);
router.put('/:id/update-anime', AdminController.putUpdateAnime);
router.put('/:id/update-word', AdminController.putUpdateWord);
router.get('/test', AdminController.adminTest);
router.get('/', AdminController.index);

module.exports = router;