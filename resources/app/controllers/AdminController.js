const AnimeModel = require('../models/animes');
const WordModel = require('../models/words');
class AdminController {
    index(req, res, next) {
        res.render('admin/index');
    }
    //[GET] /admin/create-anime
    createAnime(req, res, next) {
        res.render('admin/createAnime');
    }
    //[GET] /admin/create-word
    createWord(req, res, next) {
        res.render('admin/createWord');
    }
    //[GET] /admin/manage/animes/:id/update
    updateAnime(req, res, next) {
        AnimeModel.getOne(req.params.id)
            .then(data => {
                res.render('admin/updateAnime', { anime: data });
            });
    }
    // [GET] /admin/manage/animes
    manageAnime(req, res, next) {
        AnimeModel.getAll()
            .then(animes => {
                var flag = animes.length;
                res.render('admin/manageAnimes', { animes, flag });
            });
    }
    //[GET] /admin/manage/animes/trash
    animeTrash(req, res, next) {
        AnimeModel.getDeletedAll()
            .then(animes => {
                var flag = animes.length;
                res.render('admin/animeTrash', { animes, flag });
            });
    }
    //[GET] /admin/manage/words/trash
    wordTrash(req, res, next) {
        WordModel.getDeletedAll()
            .then(words => {
                var flag = words.length;
                res.render('admin/wordTrash', { words, flag });
            });
    }
    //[GET] /admin/manage/words
    manageWord(req, res, next) {
        WordModel.getAll()
            .then(words => {
                var flag = words.length;
                res.render('admin/manageWords', { words, flag });
            });
    }
    //[GET] /admin/manage/words/:id/update
    updateWord(req, res, next) {
        WordModel.getOne(req.params.id)
            .then(word => {
                res.render('admin/updateWord', { word });
            });
    }
    //[GET] /admin/test
    adminTest(req, res, next) {
        res.render('admin/test')
    }
    //[POST] /admin/store-anime
    storeAnime(req, res, next) {
        AnimeModel.create(req.body);
        res.redirect('/admin');
    }
    //[PUT] admin/:id/update-anime
    putUpdateAnime(req, res, next) {
        AnimeModel.updatePut({ id: req.params.id, anime: req.body })
        res.redirect('/admin/manage/animes');
    }
    //[PUT] admin/:id/update-word
    putUpdateWord(req, res, next) {
        WordModel.updatePut({ id: req.params.id, word: req.body })
            .then(() => {
                res.redirect('/word');
            });
    }
    //[PATCH] admin/manage/anime/:id/delete (hide)
    softDeleteAnime(req, res, next) {
        AnimeModel.softDelete(req.params.id)
            .then(() => {
                res.redirect('/admin/manage/animes');
            });
    }
    //[PATCH] admin/manage/word/:id/delete (hide)
    softDeleteWord(req, res, next) {
        WordModel.softDelete(req.params.id)
            .then(() => {
                if (req.query.page == 'word') {
                    res.redirect('/word');
                }
                else {
                    res.redirect('/admin/manage/words');
                }
            });
    }
    //[PATCH] admin/manage/animes/:id/restore
    restoreAnime(req, res, next) {
        AnimeModel.restoreOne(req.params.id)
            .then(() => {
                res.redirect('/admin/manage/animes/trash');
            })
            .catch(next);
    }
    //[PATCH] admin/manage/words/:id/restore
    restoreWord(req, res, next) {
        WordModel.restoreOne(req.params.id)
            .then(() => {
                res.redirect('/admin/manage/words/trash');
            })
            .catch(next);
    }

    //[DELETE] admin/manage/animes/:id/force-delete
    animeForceDelete(req, res, next) {
        AnimeModel.forceDelete(req.params.id)
            .then(() => {
                res.redirect('/admin/manage/animes/trash');
            })
            .catch(next);
    }
    wordForceDelete(req, res, next) {
        WordModel.forceDelete(req.params.id)
            .then(() => {
                res.redirect('/admin/manage/words/trash');
            })
            .catch(next);
    }
}

module.exports = new AdminController;