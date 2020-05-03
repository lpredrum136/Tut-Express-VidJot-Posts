const express = require('express')
const router = express.Router()

// Load model
const Post = require('../models/Post')

// Hien thi tat ca cac post
router.get('/', async (req, res) => {
  const posts = await Post.find().lean().sort({ date: -1 })
  res.render('posts/index', { posts })
})

// Hien thi form tao post moi
router.get('/add', (req, res) => {
  res.render('posts/add')
})

// Tao post moi
router.post('/', async (req, res) => {
  const { title, text } = req.body

  let errors = []

  if (!title) errors.push({ msg: 'Title required' })
  if (!text) errors.push({ msg: 'Text required' })
  if (errors.length > 0) res.render('posts/add', { errors, title, text })
  else {
    const newPostData = { title, text }
    const newPost = new Post(newPostData)
    await newPost.save()
    res.redirect('/posts')
  }

  /* console.log(req.body)
  res.send('ok') */
})

// Chinh sua post
router.get('/edit/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id }).lean()
  res.render('posts/edit', { post })
})

// Cap nhat post vao co so du lieu
router.put('/:id', async (req, res) => {
  const { title, text } = req.body
  await Post.findOneAndUpdate(
    {
      _id: req.params.id
    },
    { title, text }
  )
  res.redirect('/posts')
})

module.exports = router
