const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config");
const { Admin, Phone, Token, Store } = require("./models");

const sequelize = new Sequelize(config);

const db = {
  Admin: Admin(sequelize, DataTypes),
  Phone: Phone(sequelize, DataTypes),
  Token: Token(sequelize, DataTypes),
  Store: Store(sequelize, DataTypes),
  sequelize
};

Object.keys(db).forEach((model) => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});

module.exports = db;
