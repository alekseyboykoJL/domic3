module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Material', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        type: DataTypes.ENUM("folder","test")
    },
    {
        classMethods:{
            associate: function(models) {
                models.Material.hasMany(models.Material, {as: 'material', through: 'material_material'} );
                models.Material.hasMany(models.Material, {as: 'other_material', through: 'material_material'} );
            }
        }
    }
    )
}
