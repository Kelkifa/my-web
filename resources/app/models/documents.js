const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongoose_delete = require('mongoose-delete');
const myDocument = new Schema(
    {
        type: { type: String },
        parent_part: {
            title: { type: String }
        },
        children_parts: [
            {
                _id: false,
                index: Number,
                title: String,
                content: [String],
                sort: [Number]
            }
        ]
    },
    {
        timestamps: true
    }
);
myDocument.plugin(mongoose_delete, { overrideMethods: 'all' });
var model = mongoose.model('research_documents', myDocument);

class MyDocumentModel {
    store(obj) {
        var data = new model(obj);
        data.save();
    }
    getAll() {
        return model.find({})
    }
    getType(type) {
        return model.find({ type: type });
    }
    getOneId(id) {
        return model.findOne({ _id: id });
    }
    updatePut(id, obj) {
        return model.updateOne({ _id: id }, obj);
    }
    softDelete(id, type) {
        return model.delete({ _id: id })
            .then(() => {
                return this.getType(type)
                    .then(documents => {
                        var flag = documents.length;
                        return flag;
                    })
            })
    }
}

module.exports = new MyDocumentModel;