const User = require('./../../models/index').User;

module.exports = async (req, res) => {
    try {
        const { name, age } = req.body;
        const obj = { name, age, first_access: false, avatar: `https://api.adorable.io/avatars/150/${req.user.username}.png` };
        await User.update(obj, { where: { id: req.user.id } });
        return res.redirect('/');
    } catch (err) {
        console.log("ERRRO", err);
    }
}