const Answer = require('./../../models/index').Answer;
const User = require('./../../models/index').User;

module.exports = async (req, res) => {
    try {
        const answers = await Answer.findAll({
            include: [{
                model: User,
                as: 'questionUser'
            }, {
                model: User,
                as: 'answerUser'
            }],
            where: {
                answer_user_id: req.user.id,
                answer: ''
            }
        });

        return res.render('home/list-answer', {
            user: req.user,
            answers
        });
    } catch (err) {
        console.log('ERR', err);
    }
}