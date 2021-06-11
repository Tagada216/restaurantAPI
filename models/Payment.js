const {DataTypes} = require ("sequelize");

module.exports= (sequelize) =>{
    return sequelize.define('Payment',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        name:{
            type:DataTypes.STRING(50),
            allowNull:false
        }
    
    },{
        tableName: 'payment' ,
        underscored:true
    });
}