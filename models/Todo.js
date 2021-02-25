const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema(
  {
    listItem: { type: String, required: true },
    dateAdded: { type: String, required: true },
    deadline: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  {
    timestamps: true
  }
)

module.exports = { Todo }
