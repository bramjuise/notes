var express = require('express')
var router = express.Router()
const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    database: process.env.DB
})


router.get('/january', (req, res) => {
    conn.query(
        'SELECT * FROM `winter` WHERE `month` = "january"',
        function (err, results, fields) {
            res.render('month', {
                season: 'winter',
                month: "January",
                data: results
            })
        }
    );
})
router.get('/december', (req, res) => {
    conn.query(
        'SELECT * FROM `winter` WHERE `month` = "december"',
        function (err, results, fields) {
            res.render('month', {
                season: 'winter',
                month: "December",
                data: results
            })
        }
    );


})
router.get('/february', (req, res) => {
    conn.query(
        'SELECT * FROM `winter` WHERE `month` = "february"',
        function (err, results, fields) {
            res.render('month', {
                season: 'winter',
                month: "February",
                data: results
            })
        }
    );

})

router.get('/winter/:id', (req, res) => {
    var data_article_id = req.params.id;

    conn.query(
        'SELECT * FROM `winter` WHERE `id` = ?',
        [data_article_id],
        function (err, results, fields) {
            res.render('article', {
                data: results
            })
        }
    );


})

router.get('/winter/post/new-article', (req, res) => {
    res.render('post_form', {season:"winter"})
})

router.get('/winter/post/submit-new-article', (req, res) => {
    var data = req.query;
    conn.query("INSERT INTO winter (title, date, text, month) VALUES (?,?,?,?)", [data.title, data.date, data.text, data.month])
    res.redirect(`/${req.query.month}`)
})


module.exports = router;