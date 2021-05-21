'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class currencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.currencies.belongsToMany(models.user,{through:"userCurrencies"})
    }
  };
  currencies.init({
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'currencies',
  });
  return currencies;
};