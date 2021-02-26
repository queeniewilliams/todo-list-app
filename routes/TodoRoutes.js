const Router = require('express').Router()
const controller = require('../controllers/TodolistController')

Router.get('/todos/:id', controller.getTodoById)
Router.get('/todos', controller.getAllTodos)
Router.post('/todos', controller.createTodoItem)

module.exports = Router
