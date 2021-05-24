const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');
const webResearch = new Schema(
    {
        name: { type: String }
    },
    {
        timestamps: true
    }
);
webResearch.plugin(mongoose_delete, { overrideMethods: 'all' });
var model = mongoose.model('web_researchs', webResearch);

class WebResearchModel {
    getAll() {
        return model.find({});
    }
    store(obj) {
        return model.find({ name: obj.name })
            .then(data => {
                if (!data[0]) {
                    var type = new model(obj);
                    type.save();
                }
                return;
            });
    }
    sortDelete(type, flag) {
        if (flag === 0) {
            return model.delete({ name: type });
        }
        else {
            return new Promise((resolve, reject) => { resolve(1) });
        }
    }
}

module.exports = new WebResearchModel;