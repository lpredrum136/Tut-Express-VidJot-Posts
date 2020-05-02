const express = require('express')
const router = express.Router()

// Load model
const Post = require('../models/Post')

// Hien thi tat ca cac post
router.get('/', (req, res) => {
  res.send('Day la tat ca cac post')
})

// Tao post moi
router.post('/', async (req, res) => {
  const post = new Post()
})

module.exports = router
