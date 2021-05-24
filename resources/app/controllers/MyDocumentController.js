const MyDocumentModel = require('../models/documents')
const WebResearchModel = require('../models/webResearchs')
const coreShowMyDocument = require('../../core/showMyDocument');
const coreStoreCreateDocument = require('../../core/coreStoreCreateDocument2');
const { query } = require('express');

class MyDocumentController {
    //[GET] /my-documenet
    index(req, res, next) {
        coreShowMyDocument(req.query, MyDocumentModel)
            .then(data => {
                WebResearchModel.getAll()
                    .then(webResearchs => {
                        res.render('myDocument/index', { data, webResearchs, type: req.query.type });
                    });
            })
            .catch(next);
    }
    //[GET] /my-document/:id/update-form
    updateForm(req, res, next) {
        MyDocumentModel.getOneId(req.params.id)
            .then(document => {
                res.render('myDocument/updateForm', { document });
            })
            .catch(next);
    }

    //[POST] /my-document/store
    store(req, res, next) {
        var obj = coreStoreCreateDocument(req.body, MyDocumentModel, WebResearchModel);
        MyDocumentModel.store(obj);
        WebResearchModel.store({ name: obj.type })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
    //[PUT] /my-document/:id/update
    update(req, res, next) {
        var obj = coreStoreCreateDocument(req.body, MyDocumentModel, WebResearchModel);
        MyDocumentModel.updatePut(req.params.id, obj)
            .then(() => {
                res.redirect(`/my-document?type=${req.body.type}&id=${req.params.id}`);
            });
    }
    //[DELETE] /my-document/:id/delete
    softDelete(req, res, next) {
        console.log(req.body.type);
        MyDocumentModel.softDelete(req.params.id, req.body.type)
            .then((flag) => {
                // res.redirect('back');
                WebResearchModel.sortDelete(req.body.type, flag)
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
            })
            .catch();
    }

}

module.exports = new MyDocumentController;