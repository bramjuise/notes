var express = require('express')
var router = express.Router()
const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    database: process.env.DB
})


router.get('/june', (req, res) => {
    conn.query(
        'SELECT * FROM `summer` WHERE `month` = "june"',
        function (err, results, fields) {
            res.render('month', {
                season: 'summer',
                month: "June",
                data: results
            })
        }
    );
})
router.get('/july', (req, res) => {
    conn.query(
        'SELECT * FROM `summer` WHERE `month` = "july"',
        function (err, results, fields) {
            res.render('month', {
                season: 'summer',
                month: "July",
                data: results
            })
        }
    );
})
router.get('/august', (req, res) => {
    conn.query(
        'SELECT * FROM `summer` WHERE `month` = "august"',
        function (err, results, fields) {
            res.render('month', {
                season: 'summer',
                month: "August",
                data: results
            })
        }
    );
})

router.get('/summer/post/new-article', (req, res) => {
    res.render('post_form')
})

router.get('/summer/post/submit-new-article', (req, res) => {
    var data = req.query;
    conn.query("INSERT INTO summer (title, date, text, month) VALUES (?,?,?,?)", [data.title, data.date, data.text, data.month])
    res.redirect(`/${req.query.month}`)
})

router.get('/summer/:id', (req, res) => {
    var data_article_id = req.params.id;

    conn.query(
        'SELECT * FROM `summer` WHERE `id` = ?',
        [data_article_id],
        function (err, results, fields) {
            res.render('article', {
                data: results
            })
        }
    );


})

module.exports = router;