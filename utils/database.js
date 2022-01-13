const mysql = require("mysql2");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: true,
  dialectOptions: {
    connectTimeout: 60000,
  },
});

module.exports = sequelize;