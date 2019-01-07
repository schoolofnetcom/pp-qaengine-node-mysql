const Answer = require('./../../models/index').Answer;
const User = require('./../../models/index').User;

module.exports = async (req, res) => {
    const a = await Answer.findAll({
        include: [{
            model: User,
            as: 'questionUser'
        }, {
            model: User,
            as: 'answerUser'
        }],
        where: { answer_user_id : 2 }
    });
    return res.json({ a });
    // return res.redirect(`/t/${req.user.username}`);
}