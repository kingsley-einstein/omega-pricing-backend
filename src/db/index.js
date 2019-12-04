const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config");
const { Admin, Phone, Token } = require("./models");

const sequelize = new Sequelize(config);

module.exports = {
  Admin: Admin(sequelize, DataTypes),
  Phone: Phone(sequelize, DataTypes),
  Token: Token(sequelize, DataTypes),
  sequelize
};
