const express = require('express')
const connectDB = require('./config/db')

// Import routes
const posts = require('./routes/posts')

// Khoi dong app
const app = express()

// Khoi dong middleware
app.use(express.json())

// Ket noi co so du lieu
connectDB()

// Mang routes vao
app.use('/posts', posts)

const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`Server khoi dong tai port ${PORT}`))
