module.exports = {
    mongooseProblems: function (data) {
        return data.map(movie => movie.toObject());
    },
    mongooseProblemOne: function (data) {
        return data ? data.toObject() : data;
    }
}