const Todo = require('../models/Todo')

const createTodoItem = async (req, res) => {
  try {
    const todoItem = await new Todo(req.body)
    await todoItem.save()
    return res.status(201).json({
      todoItem
    })
  } catch (error) {
    res.json(error)
  }
}

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    return res.status(200).json({ todos })
  } catch (error) {
    res.json(error)
  }
}

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todo.findById(id)
  } catch (error) {
    res.json(error)
  }
}

// const updateTodo = async (req, res) => {
//   try {
//     const {id} = req.params
//     await
//   } catch (error) {
//     res.json(error)
//   }
// }

module.exports = { createTodoItem, getAllTodos, getTodoById }
