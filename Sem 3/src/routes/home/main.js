module.exports = (req, res) => {
    return res.render('home/index', { user: req.user });
}