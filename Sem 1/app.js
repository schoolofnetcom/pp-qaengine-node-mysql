const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');
const expressEjsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

app.set('PORT', process.env.PORT || 9000);
app.set('HOST', process.env.HOST || 'localhost');
app.set('NODE_ENV', process.env.NODE_ENV || 'development');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, './public')));
app.use(pino());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(expressEjsLayouts);
app.use(flash());
app.use(session({
    secret: '$%%$1321213KJSHAJDSHKJ(*&(!#(@#',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

require('./src/models/index');
require('./src/index')(app);

app.listen(app.get('PORT'), app.get('HOST'), () => console.log(`Express started at http://${app.get('HOST')}:${app.get('PORT')} ENV ${app.get('NODE_ENV')}`));