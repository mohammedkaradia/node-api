const mysql = require("mysql2");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("lead", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  logging: true,
  dialectOptions: {
    connectTimeout: 60000,
  },
});

module.exports = sequelize;