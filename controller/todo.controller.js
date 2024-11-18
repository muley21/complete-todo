const Todo = require("../models/Todo")

exports.getTodos = async (req, res) => {
    const result = await Todo.find({ userId: req.user })
    res.json({ message: "Todo Fetch Succeee", result })
}
exports.addTodo = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "Todo Add Succeee" })
}
exports.updateTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "Todo update Succeee" })
}
exports.deleteTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.json({ message: "Todo delete Succeee" })
}