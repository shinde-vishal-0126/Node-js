
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const OrderItem = sequelize.define('orderItem', {
    id:{
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey:true
    },
    quantity:{
        type:Sequelize.INTEGER
    }
})


module.exports = OrderItem;