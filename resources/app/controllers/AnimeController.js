const AnimeModel = require('../models/animes');
const { mongooseProblems } = require('../../core/dataProcessMongodb');

class AnimeController {
    index(req, res, next) {
        // animes.find({})
        //     .then(data=>{
        //     var animes = mongooseProblemAll(data);
        //     res.render('anime/index', {animes});
        // })
        // .catch(next);
        AnimeModel.getAll()
            .then(data => {
                var animes = mongooseProblems(data);
                res.render('anime/index', { animes });
            })
            .catch(next);
    }
}

module.exports = new AnimeController;