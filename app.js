const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')

// Import routes
const posts = require('./routes/posts')

// Khoi dong app
const app = express()

// Khoi dong Handlebars middleware
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// Khoi dong bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Khoi dong express middleware
app.use(express.json())

// Ket noi co so du lieu
connectDB()

// Routes co ban
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

// Mang routes vao
app.use('/posts', posts)

const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`Server khoi dong tai port ${PORT}`))
