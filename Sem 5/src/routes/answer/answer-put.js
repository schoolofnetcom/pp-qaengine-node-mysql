const Answer = require('./../../models/index').Answer;

module.exports = async (req, res) => {
    try {
        await Answer.update({
            answer: req.body.answer
        }, {
            where: { id: req.params.id }
        });

        return res.redirect(`/t/${req.user.username}`);
    } catch (err) {
        console.log('ERROR', err);
    }
}