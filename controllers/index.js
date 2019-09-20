const todos = require("../models/todos");

module.exports = {
  getAll: (req, res) => {
    res.send(todos);
  },
  getById: (req, res) => {
    try {
      const filteredTodo = todos.find(item => item.id == req.params.id);
      res.send({
        message: "Here is what you looking for",
        filteredTodo
      });
    } catch (error) {
      res.send({
        message: `error get todo by id`,
        error
      });
    }
  },
  addNewTodo: (req, res) => {
    try {
      let newId = todos.length + 1;
      let newTodo = {
        id: newId,
        todo: req.body.todo
      };

      todos.push(newTodo);

      res.status(200).send({
        message: "todo successfully added",
        todos
      });
    } catch (error) {
      res.send({
        message: `error add todo`,
        error
      });
    }
  },
  deleteTodo: (req, res) => {
    try {
      const idToDelete = req.params.id;
      let newTodo = todos.filter(item => item.id !== parseInt(idToDelete));

      todos = newTodo;

      res.status(200).send(todos);
    } catch (error) {
      res.send({
        message: `error delete todo`,
        error
      });
    }
  },
  updateTodo: (req, res) => {
    try {
      let getTodoToUpdate = todos.findIndex(data => data.id == req.params.id);

      todos.map(data => {
        if (data.id == req.params.id) {
          todos[getTodoToUpdate].todo = req.body.todo;
        }
      });
      res.send({
        message: "data successfully updated",
        todos
      });
    } catch (error) {
      res.send({
        message: `error update todo`,
        error
      });
    }
  }
};
