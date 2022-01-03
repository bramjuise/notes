require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000
const mysql = require('mysql2')
const path = require('path')
var winter_router = require('./routes/winter')
var spring_router = require('./routes/spring')
var autumn_router = require('./routes/autumn')
var summer_router = require('./routes/summer')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    database: process.env.DB
})
app.use(express.static(__dirname + 'public'));
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index', {title:"main"})
})

app.use('/', winter_router)
app.use('/', spring_router)
app.use('/', summer_router)
app.use('/', autumn_router)



app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})
