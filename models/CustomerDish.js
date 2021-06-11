const {DataTypes} = require ("sequelize");

module.exports= (sequelize) =>{
    return sequelize.define('customer_dish',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
},{
    underscored: true,
    //timestamps: false, <- Supprimer la date de création + update
    tableName: 'customer_dish'
});
}