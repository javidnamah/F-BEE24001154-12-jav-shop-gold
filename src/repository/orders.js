const { User, Order, Item } = require("../../models");

class OrderRepository {
  constructor() {}

  async findAll() {
    const orderList = await Order.findAll({
      attributes: ["id", "status"],
      include: [
        {
          model: User,
          required: true,
          as: "user",
          attributes: ["name"],
        },
        {
          model: Item,
          required: true,
          as: "item",
          attributes: ["name"],
        },
      ],
    });
    return orderList;
  }

  async insert(order) {
    const createdOrder = await Order.create({
      item_id: order.item_id,
      status: order.status,
      user_id: order.user_id,
    });

    return createdOrder;
  }

  async updateById(id, newData) {
    const updateById = await Order.update(newData, {
      where: { id: id },
    });
    return updateById;
  }

  async delete(id) {
    const deleteId = await Order.destroy({
      where: {
        id: id,
      },
    });
    return deleteId;
  }
}

module.exports = OrderRepository;
