const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const movies = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String }
    },
    {
        timestamps: true
    }
);

movies.plugin(mongoose_delete, { overrideMethods: 'all' });
var model = mongoose.model('movies', movies);

class AnimeModel {
    create(data) {
        var anime = new model(data);
        anime.save();
    }
    getAll() {
        return model.find({})
            .then(data => data);
    }
    getOne(id) {
        return model.findOne({ _id: id })
            .then(data => data);
    }
    updatePut(data) {
        return model.updateOne({ _id: data.id }, data.anime)
            .then(() => 1);
    }
    softDelete(id) {
        return model.delete({ _id: id });
    }
    getDeletedAll() {
        return model.findDeleted({});
    }
    restoreOne(id) {
        return model.restore({ _id: id });
    }
    forceDelete(id) {
        return model.deleteOne({ _id: id });
    }
}

module.exports = new AnimeModel;