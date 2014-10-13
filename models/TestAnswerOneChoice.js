module.exports = function(sequelize, DataTypes) {
    var complexRights = {};
    var TestAnswerOneChoice = sequelize.define('TestAnswerOneChoice', {
        answer:DataTypes.STRING,
        isCorrect:DataTypes.BOOLEAN

    }, {
        classMethods: {
            associate: function(models) {
                TestAnswerOneChoice.hasOne(models.TestQuestion);
            }
        }
    });

    return TestAnswerOneChoice;
};
