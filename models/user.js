const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const UserEntity = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: true },
  email: { type: Sequelize.STRING, allowNull: true },
  number: { type: Sequelize.BIGINT, allowNull: true },
  utcSource: { type: Sequelize.STRING, allowNull: true },
  utcTerm: { type: Sequelize.STRING, allowNull: true },
  utcMedium: { type: Sequelize.STRING, allowNull: true },
  utmCampaign: { type: Sequelize.STRING, allowNull: true },
  utmDevice: { type: Sequelize.STRING, allowNull: true },
  utmLocation: { type: Sequelize.STRING, allowNull: true },

});

module.exports = UserEntity;