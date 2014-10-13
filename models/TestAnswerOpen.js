module.exports = function(sequelize, DataTypes) {
    var complexRights = {};
    var TestAnswerOpen = sequelize.define('TestAnswerOpen', {
        text:DataTypes.STRING,
        type:DataTypes.ENUM('auto','script','manual')
    }, {
        classMethods: {
            associate: function(models) {
                TestAnswerOpen.hasOne(models.TestQuestion);
            }
        }
    });

    return TestAnswerOpen;
};
