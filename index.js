require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000
const mysql = require('mysql2')
const path = require('path')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    database: process.env.DB
})

app.set('view engine', 'ejs')
app.get('/', (req,res) => {
    res.render('index', {title:"main"})
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})