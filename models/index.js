const {Sequelize} = require('sequelize');

const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_URL
);

const Customer = require('./Customer')(sequelize);
const Dish = require('./Dish')(sequelize);
const Order = require('./Order')(sequelize);
const Payment = require('./Payment')(sequelize);
const CustomerDish = require('./CustomerDish')(sequelize);
const OrderDish = require('./OrderDish')(sequelize);

Payment.hasMany(Order);
Order.belongsTo(Payment);

Customer.hasMany(Order);
Order.belongsTo(Customer);

Order.belongsToMany(Dish, {through :OrderDish});
Dish.belongsToMany(Order, {through: OrderDish});



Customer.belongsToMany(Dish, {through:{model:CustomerDish, unique:false}});
Dish.belongsToMany(Customer,{through:{model:CustomerDish, unique:false}});

module.exports = sequelize;