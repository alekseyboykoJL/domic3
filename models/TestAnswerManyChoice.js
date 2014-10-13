module.exports = function(sequelize, DataTypes) {
    var complexRights = {};
    var TestAnswerManyChoice = sequelize.define('TestAnswerManyChoice', {
        answer:DataTypes.STRING,
        isCorrect:DataTypes.BOOLEAN

    }, {
        classMethods: {
            associate: function(models) {
                TestAnswerManyChoice.hasOne(models.TestQuestion);
            }
        }
    });

    return TestAnswerManyChoice;
};
