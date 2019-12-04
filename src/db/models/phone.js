module.exports = (sequelize, DataTypes) => {
  return sequelize.define('phone', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Model name is required"
        }
      }
    },
    afficheur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    batterie: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    connecteur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    micro: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hautParleur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bouttonOnOff: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    desoxydation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restoration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
