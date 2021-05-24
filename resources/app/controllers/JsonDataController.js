AnimeModel = require('../models/animes');

class JsonDataController {
    //[GET] /json-data/anime
    anime(req, res, next) {
        AnimeModel.getAll()
            .then(data => {
                res.json(data);
            })
            .catch(next);
    }
}

module.exports = new JsonDataController;
