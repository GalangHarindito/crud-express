const express = require("express");

const route = express.Router();
const todos = require("../data/todos");

route.get("/", (req, res) => {
  try {
    res.send({
      message: `Here your todo list`,
      todos
    });
  } catch (error) {
    res.send({
      message: `error get todo`,
      error
    });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    let idTodo = await todos.findIndex(
      element => element.id === Number(req.params.id)
    );

    todos.splice(idTodo, 1);

    res.send({
      message: `deleted todo succeed`,
      todos
    });
  } catch (error) {
    res.send({
      message: `error delete todo`,
      error
    });
  }
});

route.put("/:id", async (req, res) => {
  try {
    let idTodo = await todos.findIndex(
      element => element.id === Number(req.params.id)
    );

    todos.map(data => {
      if (data.id === idTodo) {
        todos[idTodo].todo = req.body.todo;
      }
    });

    res.send({
      message: `todo successfuly updated`,
      todos
    });
  } catch (error) {
    res.send({
      message: `error update todo`,
      error
    });
  }
});

route.post("/", (req, res) => {
  try {
    todos.push(req.body);
    res.send({
      message: `new todo successfuly added`,
      todos
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: `error add todo`,
      error
    });
  }
});

module.exports = route;
