const Router = require('express').Router()
const controller = require('../controllers/TodolistController')

Router.get('/todos', controller.getAllTodos)

Router.get('/todos/:id', controller.getTodoById)

Router.post('/todos', controller.createTodoItem)

module.exports = Router
