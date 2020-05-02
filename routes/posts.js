const express = require('express')
const router = express.Router()

// Load model
const Post = require('../models/Post')

// Hien thi tat ca cac post
router.get('/', (req, res) => {
  res.send('Day la tat ca cac post')
})

// Hien thi form tao post moi
router.get('/add', (req, res) => {
  res.render('posts/add')
})

// Tao post moi
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

module.exports = router
