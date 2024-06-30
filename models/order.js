'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Item, { foreignKey: "item_id", as: "item" });
      Order.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    }
  }


  Order.init({
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Items',
        key: 'id'
      }
      },
    
    status: DataTypes.STRING,
    
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Order',
    underscored: true
  });
  return Order;
};