const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const UserEntity = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  number: { type: Sequelize.STRING, allowNull: false },
  utmSource: { type: Sequelize.STRING },
  utmTerm: { type: Sequelize.STRING },
  utmMedium: { type: Sequelize.STRING},
  utmCampaign: { type: Sequelize.STRING},
  utmDevice: { type: Sequelize.STRING },
  utmLocation: { type: Sequelize.STRING },

});

module.exports = UserEntity;