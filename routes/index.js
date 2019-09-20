const express = require("express");

const route = express.Router();
const {
  getAll,
  deleteTodo,
  updateTodo,
  addNewTodo,
  getById
} = require("../controllers/index");

route.get("/", getAll);
route.get("/:id", getById);
route.post("/", addNewTodo);
route.delete("/:id", deleteTodo);
route.put("/:id", updateTodo);

module.exports = route;
