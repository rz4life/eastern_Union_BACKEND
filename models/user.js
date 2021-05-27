'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.belongsToMany(models.currencies,{through:"userCurrencies"})
    }
  };
  user.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userCardNum: DataTypes.STRING,
    userCardName: DataTypes.STRING,
    userCardExp: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    preferedCurrency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};