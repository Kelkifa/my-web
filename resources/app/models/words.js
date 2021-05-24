const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');
const words = new Schema(
    {
        word: { type: String },
        description: { type: String, default: '' },
        mean: { type: String },
        topic: { type: String },
        image: { type: String }
    },
    {
        timestamps: true
    }
);
words.plugin(mongoose_delete, { overrideMethods: 'all' });
var model = mongoose.model('words', words);

class WordModel {
    store(data) {
        var word = new model(data);
        word.save();
    }
    getAll() {
        return model.find({});
    }
    getDeletedAll() {
        return model.findDeleted({});
    }
    getOne(data) {
        return model.findOne({ _id: data });
    }
    updatePut(data) {
        return model.updateOne({ _id: data.id }, data.word)
    }
    findWords(data) {
        return model.find({ word: data })
            .then(words => words);
    }
    findTopic(data) {
        return model.find({ topic: data })
            .then(words => words);
    }
    findMean(data) {
        return model.find({ mean: data })
            .then(words => words);
    }
    softDelete(id) {
        return model.delete({ _id: id });
    }
    restoreOne(id) {
        return model.restore({ _id: id });
    }
    forceDelete(id) {
        return model.deleteOne({ _id: id });
    }
}

module.exports = new WordModel;