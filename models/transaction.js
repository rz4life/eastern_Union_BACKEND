'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.transaction.belongsTo(models.user, {foreignKey: 'sending_userId', constraints: false})
      models.transaction.belongsTo(models.user, {as: "friend", foreignKey: 'receiving_userId', constraints:false})
     }
  };
  transaction.init({
    sending_userId: DataTypes.INTEGER,
    receiving_userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};