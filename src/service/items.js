class ItemService {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async getAll() {
    try {
      const itemList = await this.itemRepository.findAll();

      return {
        statusCode: 200,
        item: itemList,
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: err,
      };
    }
  }

  async createItem({ name, price }) {
    try {
      const createdItem = await this.itemRepository.insert({
        name,
        price,
      });

      return {
        statusCode: 201,
        createdItem: createdItem,
        message: "berhasil membuat item",
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: err,
      };
    }
  }

  async updateById(id, newData) {
    try {
      const updateItem = await this.itemRepository.updateById(id, newData);

      if (updateItem) {
        return {
          statusCode: 200,
          message: "berhasil mengupdate item",
          item: updateItem,
        };
      }
    } catch (err) {
      return {
        statusCode: 500,
        message: err.message,
      };
    }
  }

  async deleteById(deleteId) {
    try {
      const deleteItem = await this.itemRepository.delete(deleteId);

      if (!deleteItem) {
        return {
          statusCode: 400,
          message: "item tidak ditemukan",
        };
      } else {
        return {
          statusCode: 200,
          delete_item: deleteItem,
          message: "berhasil menghapus item",
        };
      }
    } catch (err) {
      return {
        statusCode: 500,
        message: err.message,
      };
    }
  }
}

module.exports = ItemService;
