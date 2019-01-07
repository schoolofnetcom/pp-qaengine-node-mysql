module.exports = (app) => {
    app.use('/', require('./routes/home'));
    app.use('/users', require('./routes/user'));
    app.use('/welcome', require('./routes/welcome'));
    app.use('/answers', require('./routes/answer'));
}