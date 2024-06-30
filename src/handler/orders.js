class OrderHandler {
  constructor(orderService) {
    this.orderService = orderService;

    this.getAll = this.getAll.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async getAll(req, res) {
    const serviceRes = await this.orderService.getAll();

    res.status(serviceRes.statusCode).send({
      order: serviceRes.order,
      message: serviceRes.message,
    });
  }

  async createOrder(req, res) {
    const payload = req.body;
    const serviceRes = await this.orderService.createOrder(payload);

    res.status(serviceRes.statusCode).send({
      message: serviceRes.message,
      created_order: serviceRes.createdOrder,
    });
  }

  async updateStatus(req, res) {
    const id = req.params.id;
    const payload = req.body;
    const serviceRes = await this.orderService.updateById(id, payload);

    res.status(serviceRes.statusCode).send({
      message: serviceRes.message,
      update_order: serviceRes.updateOrder,
    });
  }

  async deleteById(req, res) {
    const id = req.params.id;
    const serviceRes = await this.orderService.deleteById(id);

    res.status(serviceRes.statusCode).send({
      message: serviceRes.message,
      delete_order: serviceRes.deleteOrder,
    });
  }
}

module.exports = OrderHandler;
