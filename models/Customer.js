const {DataTypes} = require ("sequelize");

module.exports= (sequelize) =>{
    return sequelize.define('Customer',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        lastname:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        firstname:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(14),
            allowNull: false
        }
    
    },{
        tableName: 'customer' ,
        underscored:true
    });
}

