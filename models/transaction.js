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
      models.transaction.belongsTo(models.user, {foreignKey: 'sendingUserId', constraints: false})
      models.transaction.belongsTo(models.user, {as: "friend", foreignKey: 'receivingUserId', constraints:false})
     }
  };
  transaction.init({
    sendingUserId: DataTypes.INTEGER,
    receivingUserId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};