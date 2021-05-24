const { mongooseProblems, mongooseProblemOne } = require("../core/dataProcessMongodb");

function coreShowMyDocument(query, MyDocumentModel) {
    if (query.type) {
        return MyDocumentModel.getType(query.type)
            .then(typeDatas => {
                if (query.id) {
                    return MyDocumentModel.getOneId(query.id)
                        .then(idData => {
                            idData = mongooseProblemOne(idData);
                            return { documents: typeDatas, detail: idData };
                        });
                }
                else {
                    return { documents: typeDatas };
                }
            });
    }
    else {
        return new Promise((resolve) => {
            resolve({ documents: 0 });
        });
    }

}

module.exports = coreShowMyDocument;