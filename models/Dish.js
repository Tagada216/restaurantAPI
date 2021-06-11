const {DataTypes} = require ("sequelize");

module.exports= (sequelize) =>{
    return sequelize.define('Dish',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        name:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false
        } 
    
    },{
        tableName: 'dish' ,
        underscored:true
    });
}