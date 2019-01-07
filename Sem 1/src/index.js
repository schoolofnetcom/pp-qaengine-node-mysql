module.exports = (app) => {
    app.use('/', require('./routes/home'));
    app.use('/users', require('./routes/user'));
}