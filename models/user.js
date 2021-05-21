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
      models.user.hasMany(models.transaction)
    }
  };
  user.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userCard_num: DataTypes.STRING,
    userCard_name: DataTypes.STRING,
    userCard_exp: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    prefered_currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};