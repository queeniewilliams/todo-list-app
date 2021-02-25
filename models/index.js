const mongoose = require('mongoose')
const UserSchema = require('./User')
const TodoSchema = require('./Todo')

const User = mongoose.model('users', UserSchema)
const Todo = mongoose.model('todos', TodoSchema)

module.exports = { User, Todo }
