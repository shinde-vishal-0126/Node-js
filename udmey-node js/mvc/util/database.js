// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host:'localhost',
//     user: 'root',
//     password:'root',
//     database:'node-compleat'
// })

// module.exports = pool.promise();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-compleat", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
