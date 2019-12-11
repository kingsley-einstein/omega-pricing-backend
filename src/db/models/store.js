module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define("store", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Store name is required"
        }
      }
    }
  });

  Store.associate = ({ Phone }) => {
    Store.hasMany(Phone, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: "store"
    });
  }
  return Store;
};
