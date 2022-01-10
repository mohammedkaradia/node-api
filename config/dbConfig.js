const config = {
  host: "localhost",
  user: "root",
  password: null,
  database: "lead",
  dialect:'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = config;
