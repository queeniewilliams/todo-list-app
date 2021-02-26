const User = require('../models/User')

const createUser = async (req, res) => {
  try {
    console.log(req.body)
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createUser
}
