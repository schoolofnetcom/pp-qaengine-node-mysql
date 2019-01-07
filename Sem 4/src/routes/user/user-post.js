const User = require('./../../models/index').User;

module.exports = async (req, res) => {
    try {
        const user = await User.create(req.body);
        if (!user) {
            return res.redirect('/404');
        }
        return res.redirect('/');
    } catch(err) {
        console.log('ERROR', err);
    }
}