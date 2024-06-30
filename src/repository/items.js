const { Item } = require("../../models");

class ItemRepository {
  constructor() {}

  async findAll() {
    const itemList = await Item.findAll({
      attributes: ["id", "name", "price"],
    });

    return itemList;
  }

  async insert(item) {
    const createdItem = await Item.create({
      name: item.name,
      price: item.price,
    });

    return createdItem;
  }

  async updateById(id, newData) {
    const updateById = await Item.update(newData, {
      where: { id: id },
    });
    return updateById;
  }

  async delete(id) {
    const deleteId = await Item.destroy({
      where: {
        id: id,
      },
    });
    return deleteId;
  }
}
module.exports = ItemRepository;
