const express = require('express')
const connectDB = require('./config/db')

// Khoi dong app
const app = express()

// Khoi dong middleware
app.use(express.json())

// Ket noi co so du lieu
connectDB()

const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`Server khoi dong tai port ${PORT}`))
