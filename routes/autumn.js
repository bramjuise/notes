var express = require('express')
var router = express.Router()
const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    database: process.env.DB
})

router.get('/september', (req,res) =>{
    conn.query(
        'SELECT * FROM `autumn` WHERE `month` = "september"',
        function (err, results, fields) {
            res.render('month', {
                season: 'autumn',
                month: "September",
                data: results
            })
        }
    );
})
router.get('/october', (req,res) =>{
    conn.query(
        'SELECT * FROM `autumn` WHERE `month` = "october"',
        function (err, results, fields) {
            res.render('month', {
                season: 'autumn',
                month: "October",
                data: results
            })
        }
    );
})
router.get('/november', (req,res) =>{
    conn.query(
        'SELECT * FROM `autumn` WHERE `month` = "november"',
        function (err, results, fields) {
            res.render('month', {
                season: 'autumn',
                month: "November",
                data: results
            })
        }
    );
})

router.get('/autumn/post/new-article', (req, res) => {
    res.render('post_form')
})

router.get('/autumn/post/submit-new-article', (req, res) => {
    var data = req.query;
    conn.query("INSERT INTO autumn (title, date, text, month) VALUES (?,?,?,?)", [data.title, data.date, data.text, data.month])
    res.redirect(`/${req.query.month}`)
})

router.get('/autumn/:id', (req, res) => {
    var data_article_id = req.params.id;

    conn.query(
        'SELECT * FROM `autumn` WHERE `id` = ?',
        [data_article_id],
        function (err, results, fields) {
            res.render('article', {
                data: results
            })
        }
    );


})

module.exports = router;