const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
const logger = (req, res, next) =>{
   console.log(req.originalUrl)
   next()
}

// app.get('/', logger, (req, res)=>{
//    res.render('index')
// })

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

app.listen(port, ()=>{
   console.log(`App is running on port ${port}.`)
})