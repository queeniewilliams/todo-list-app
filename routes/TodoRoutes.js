const { Router } = require('express')
const router = Router()
const controller = require('../controllers/TodolistController')

router.get('/todos', controller.getAllTodos)

router.get('/todos/:id', controller.getTodoById)

router.post('/todos', controller.createTodoItem)

module.exports = router
