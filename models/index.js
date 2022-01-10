const dbConfig = require("../config/dbConfig");
var Sequelize = require("sequelize");
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var db = {}

const seq = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

seq.authenticate()
  .then(() => {
    console.log("Successfull connection to mysql database name : lead");
  })
  .catch((err) => {
    console.log("Unsuccessfull connection to mysql database name : lead", err);
  });
 console.log(__dirname); 
 fs.readdirSync(__dirname)
 .filter(function (file) {
  return( file.indexOf('.')!== 0) && (file !== basename) && (file.slice(-3) === '.js');
 }).forEach(function (file) {
    var model = require(path.join(__dirname, file))(seq, Sequelize.DataTypes);
    db[model.name] = model;
 });

 Object.keys(db).forEach(function (modelName) {
  if(db[modelName].associate){
   db[modelName].associate(db);
  }
 })

 db.sequelize = seq;
 db.Sequelize = Sequelize;

 module.exports = db;