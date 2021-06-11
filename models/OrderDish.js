const {DataTypes} = require ("sequelize");

module.exports= (sequelize) =>{
    return sequelize.define('order_dish',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
},{
    underscored:true,
    tableName: 'order_dish'
});
}