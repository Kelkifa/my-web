const homeRouter = require('./home');
const animeRouter = require('./anime');
const registerRouter = require('./register');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const adminRouter = require('./admin');
const gameRouter = require('./game');
const wordRouter = require('./word');
const myDocumentRouter = require('./myDocument');
const jsonDataRouter = require('./jsonData');
const adminAccess = require('../app/midleware/adminAccess');

function router(app) {
    app.use('/my-document', myDocumentRouter);
    app.use('/word', wordRouter);
    app.use('/game', gameRouter);
    app.use('/admin', adminAccess, adminRouter);
    app.use('/logout', logoutRouter);
    app.use('/register', registerRouter);
    app.use('/login', loginRouter);
    app.use('/anime', animeRouter);
    app.use('/json-data', jsonDataRouter);
    app.use('/', homeRouter);
}

module.exports = router;