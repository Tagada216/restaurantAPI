const {DataTypes} = require ("sequelize");

module.exports= (sequelize) =>{
    return sequelize.define('Order',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        code:{
            type:DataTypes.STRING(30),
            allowNull:false
        },
        status:{
            type: DataTypes.ENUM,
            values:['pending','cooking','finnish'],
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        } 
    },{
        tableName: 'order' ,
        underscored:true
    });
}