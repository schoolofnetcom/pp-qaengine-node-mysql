module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        is_annon: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Answer.associate = function(models) {
        const { User } = models;
        Answer.belongsTo(User, { as: 'questionUser', foreignKey: 'question_user_id' });
        User.hasMany(Answer, { as: 'questionUser', foreignKey: 'question_user_id' });
        Answer.belongsTo(User, { as: 'answerUser', foreignKey: 'answer_user_id' });
        User.hasMany(Answer, { as: 'answerUser', foreignKey: 'answer_user_id' });
    }

    return Answer;
}