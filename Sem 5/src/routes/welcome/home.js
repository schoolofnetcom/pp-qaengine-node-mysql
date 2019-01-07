const User = require('./../../models/index').User;

module.exports = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user && user.first_access) {
            return res.render('welcome/index', { user: req.user });
        }
        return res.redirect(`/t/${req.user.username}`);
    } catch (err) {
        console.log('ERROR', err);
    }
}