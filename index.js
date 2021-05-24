const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const session = require('express-session');


/** method override */
var methodOverride = require('method-override');
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

/** session */
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

/** midleware */
var loggedMW = require('./resources/app/midleware/logged');
app.use('/', loggedMW);
// var adminAccess = require('./resources/app/midleware/adminAccess');
// app.use('/admin', adminAccess);
/** url encoded */
app.use(express.urlencoded({extended:true}));

/** static file public */
app.use(express.static(path.join(__dirname, 'public')));

/** connect db */
const connectdb = require('./resources/core/connectDb');
connectdb.connect();

/** ejs layouts */
var expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
app.set('layout', 'layouts/main');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));


const router = require('./resources/routes');
router(app);
// app.get('/', (req, res)=>{
//     res.render('home');
// });

app.listen(port, ()=>{
    console.log(`Web at localhost:${port}`);
});