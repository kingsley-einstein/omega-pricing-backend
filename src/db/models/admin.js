const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("admin", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Email is required"
        },
        isEmail: {
          msg: "Enter a valid email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is required"
        }
      }
    }
  }, {
    hooks: {
      beforeSave: (user) => {
        if (user.changed("password")) {
          const salt = bcrypt.genSaltSync(14);
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  });

  Admin.findByEmail = (email) => Admin.findOne({
    where: {
      email
    }
  });

  return Admin;
};
