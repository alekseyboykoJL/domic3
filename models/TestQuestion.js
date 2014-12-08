module.exports = function(sequelize, DataTypes) {
    var complexRights = {};
    var TestQuestion = sequelize.define('TestQuestion', {
        text:DataTypes.TEXT,
        type:DataTypes.ENUM('ManyChoice','OneChoice','Open')

    }, {
        classMethods: {
        }

    });

    return TestQuestion;
};
