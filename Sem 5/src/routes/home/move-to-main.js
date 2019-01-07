const Answer = require('./../../models/index').Answer;
const User = require('./../../models/index').User;

module.exports = async (req, res) => {
    return res.redirect(`/t/${req.user.username}`);
}