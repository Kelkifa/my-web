const WordModel = require('../models/words');

class WordController{
    //[GET] /word
    index(req, res, next){
        // var searchType = req.query.
        if(!req.query.s){
            WordModel.getAll()
                .then(words =>{
                    res.render('word/index', {words});
                })
                .catch(next);
        }
        else{
            switch(req.query.type){
                case 'w': 
                    WordModel.findWords(req.query.s)
                        .then(words =>{
                            res.render('word/index', {words});
                        });
                    break;

                case 't':
                    WordModel.findTopic(req.query.s)
                        .then(words =>{
                            res.render('word/index', {words});
                        });
                    break;

                case 'm':
                    WordModel.findMean(req.query.s)
                        .then(words =>{
                            res.render('word/index', {words});
                        });
                    break;

                default:
                    WordModel.getAll()
                        .then(words =>{
                            res.render('word/index', {words});
                        })
                        .catch(next);
                    break;
            }
            if(req.query.w){
                WordModel.findWords(req.query.w)
                    .then(words =>{
                        res.render('word/index', {words});
                    });
            }
            else{
                WordModel.getAll()
                    .then(words =>{
                        res.render('word/index', {words});
                    });
            }
        }
    }
    //[POST] /word/storeWord
    store(req, res, next){
        WordModel.store(req.body);
        res.redirect('/word');
    }
}

module.exports = new WordController;