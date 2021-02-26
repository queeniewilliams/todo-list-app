const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema(
  {
    listItem: { type: String, required: true },
    deadline: { type: String, required: false }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('todos', Todo)
