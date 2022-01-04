var express = require('express')
var router = express.Router()
const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    database: process.env.DB
})

router.get('/march', (req,res) =>{
    conn.query(
        'SELECT * FROM `summer` WHERE `month` = "march"',
        function (err, results, fields) {
            res.render('month', {
                season: 'spring',
                month: "march",
                data: results
            })
        }
    );
})
router.get('/april', (req,res) =>{
    conn.query(
        'SELECT * FROM `summer` WHERE `month` = "april"',
        function (err, results, fields) {
            res.render('month', {
                season: 'spring',
                month: "April",
                data: results
            })
        }
    );
})
router.get('/may', (req,res) =>{
    conn.query(
        'SELECT * FROM `summer` WHERE `month` = "may"',
        function (err, results, fields) {
            res.render('month', {
                season: 'spring',
                month: "May",
                data: results
            })
        }
    );
})

router.get('/spring/post/new-article', (req, res) => {
    res.render('post_form')
})

router.get('/spring/post/submit-new-article', (req, res) => {
    var data = req.query;
    conn.query("INSERT INTO spring (title, date, text, month) VALUES (?,?,?,?)", [data.title, data.date, data.text, data.month])
    res.redirect(`/${req.query.month}`)
})

router.get('/spring/:id', (req, res) => {
    var data_article_id = req.params.id;

    conn.query(
        'SELECT * FROM `spring` WHERE `id` = ?',
        [data_article_id],
        function (err, results, fields) {
            res.render('article', {
                data: results
            })
        }
    );


})

module.exports = router;