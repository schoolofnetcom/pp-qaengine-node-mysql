const Answer = require('./../../models/index').Answer;
const User = require('./../../models/index').User;

module.exports = async (req, res) => {
    try {
        req.body.is_annon = req.body.is_annon ? true : false;
        req.body.question_user_id = req.user.id;
        const user = await User.findOne({ where: { username: req.body.answerUser }});
        req.body.answer_user_id = user.id;
        const answer = await Answer.create(req.body);
        if (!answer) {
            return res.redirect('/404');
        }
        return res.redirect(`/t/${user.username}`);
    } catch (err) {
        console.log('ERROR', err);
    }
}