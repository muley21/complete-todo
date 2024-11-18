const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controller/todo.controller")
const { userProtected } = require("../middlewares/auth.middleware")

const router = require("express").Router()

router
    .get("/get-todo", userProtected, getTodos)
    .post("/add-todo", userProtected, addTodo)
    .put("/update-todo/:id", userProtected, updateTodo)
    .delete("/delete-todo/:id", userProtected, deleteTodo)

module.exports = router