const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const createErrorResponse = (message) => ({
  error: message,
})

router.post("/register", async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(403).json(createErrorResponse("User already registered with this email"))
    }

    const newUser = await User.create({ email, password })
    const token = generateToken(newUser)
    return res.status(200).json({ user: newUser, token })
  } catch (error) {
    console.error("Error during registration:", error)
    return res.status(500).json(createErrorResponse("Internal Server Error"))
  }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(403).json(createErrorResponse("Invalid credentials"))
    }

    const token = generateToken(user)
    return res.status(200).json({ user, token })
  } catch (error) {
    console.error("Error during login:", error)
    return res.status(500).json(createErrorResponse("Internal Server Error"))
  }
})

// Helper function to generate a JWT token
function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  }

  const secretKey = "yourSecretKey"
  const expiration = "1h"

  const token = jwt.sign(payload, secretKey, { expiresIn: expiration })
  return token
}

module.exports = router
