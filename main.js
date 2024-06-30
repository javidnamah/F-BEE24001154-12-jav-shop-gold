const express = require("express");
const app = express();
const PORT = 3000;

// import users
const UserRepository = require("./src/repository/users");
const UserService = require("./src/service/users");
const UserHandler = require("./src/handler/users");
// import auth
const AuthService = require("./src/service/auth");
const AuthHandler = require("./src/handler/auth");
// import items
const ItemRepository = require("./src/repository/items");
const ItemService = require("./src/service/items");
const ItemHandler = require("./src/handler/items");
// import orders
const OrderRepository = require("./src/repository/orders");
const OrderService = require("./src/service/orders");
const OrderHandler = require("./src/handler/orders");

app.use(express.json());

// users
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);
// auth
const authService = new AuthService(userRepository);
const authHandler = new AuthHandler(authService);
// items
const itemRepository = new ItemRepository();
const itemService = new ItemService(itemRepository);
const itemHandler = new ItemHandler(itemService);
// orders
const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);
const orderHandler = new OrderHandler(orderService);

app.get("/users", userHandler.getAll);

app.post("/auth/login", authHandler.login);
app.post("/auth/register", authHandler.register);

app.get("/daftar/item", itemHandler.getAll);
app.post("/create/item", itemHandler.createItem);
app.put("/update/item/:id", itemHandler.updateById);
app.delete("/delete/item/:id", itemHandler.deleteById);

app.get("/daftar/order", orderHandler.getAll);
app.post("/create/order", orderHandler.createOrder);
app.patch("/update/status/:id", orderHandler.updateStatus);
app.delete("/delete/order/:id", orderHandler.deleteById);

app.listen(PORT, function () {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
