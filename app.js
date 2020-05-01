const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');
const hbshelpers = require('handlebars-helpers');
const multihelpers = hbshelpers();

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const gameRouter = require('./routes/game');

let app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine(
    "hbs",
    hbs({
        helpers: multihelpers,
        partialsDir: ["views/partials"],
        extname: ".hbs",
        layoutsDir: "views",
        defaultLayout: "layout"
    })
);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/games', gameRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send('<img src="/images/error_codes/404.jpg" style="">');
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', {active: 'none'});
});

module.exports = app;
