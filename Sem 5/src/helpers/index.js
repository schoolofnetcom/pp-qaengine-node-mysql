module.exports = (app) => {
    app.locals.checkUserDelete = function(user, answerUser) {
        return user.id === answerUser.id;
    }
}