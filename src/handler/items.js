class ItemHandler {
  constructor(itemService) {
    this.itemService = itemService;

    // binding
    this.getAll = this.getAll.bind(this);
    this.createItem = this.createItem.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async getAll(req, res) {
    const serviceRes = await this.itemService.getAll();

    res.status(serviceRes.statusCode).send({
      item: serviceRes.item,
    });
  }

  async createItem(req, res) {
    const payload = req.body;
    const serviceRes = await this.itemService.createItem(payload);

    res.status(serviceRes.statusCode).send({
      message: serviceRes.message,
      created_item: serviceRes.createdItem,
    });
  }

  async updateById(req, res) {
    const id = req.params.id;
    const payload = req.body;
    const serviceRes = await this.itemService.updateById(id, payload);

    res.status(serviceRes.statusCode).send({
      message: serviceRes.message,
      update_item: serviceRes.updateItem,
    });
  }

  async deleteById(req, res) {
    const id = req.params.id;
    const serviceRes = await this.itemService.deleteById(id);

    res.status(serviceRes.statusCode).send({
      message: serviceRes.message,
      delete_item: serviceRes.deleteItem,
    });
  }
}

module.exports = ItemHandler;
