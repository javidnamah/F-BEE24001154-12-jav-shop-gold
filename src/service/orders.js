class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async getAll() {
    try {
      const orderList = await this.orderRepository.findAll();

      return {
        statusCode: 200,
        order: orderList,
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: err,
      };
    }
  }

  async createOrder({ item_id, status, user_id }) {
    try {
      const createdOrder = await this.orderRepository.insert({
        item_id,
        status,
        user_id,
      });

      if (!createdOrder) {
        return {
          statusCode: 400,
          message: "salah input pesanan",
        };
      } else {
        return {
          statusCode: 201,
          created_order: createdOrder,
          message: "berhasil melakukan pesanan",
        };
      }
    } catch (err) {
      return {
        statusCode: 500,
        message: err,
      };
    }
  }

  async updateById(id, newData) {
    try {
      const updateOrder = await this.orderRepository.updateById(id, newData);

      if (updateOrder) {
        return {
          statusCode: 200,
          message: "berhasil mengupdate pesanan",
          order: updateOrder,
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
      const deleteOrder = await this.orderRepository.delete(deleteId);

      if (!deleteOrder) {
        return {
          statusCode: 400,
          message: "pesanan tidak ditemukan",
        };
      } else {
        return {
          statusCode: 200,
          delete_order: deleteOrder,
          message: "berhasil menghapus pesanan",
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

module.exports = OrderService;
