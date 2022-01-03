var express = require('express')
var router = express.Router()

router.get('/january', (req,res) =>{
    res.render('month', {season:'winter',month:"January"})
})
router.get('/december', (req,res) =>{
    res.render('month', {season:'winter',month:"December"})
})
router.get('/february', (req,res) =>{
    res.render('month', {season:'winter',month:"February"})
})

module.exports = router;