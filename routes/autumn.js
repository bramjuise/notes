var express = require('express')
var router = express.Router()

router.get('/september', (req,res) =>{
    res.render('month', {season:'autumn',month:"September"})
})
router.get('/october', (req,res) =>{
    res.render('month', {season:'autumn',month:"October"})
})
router.get('/november', (req,res) =>{
    res.render('month', {season:'autumn',month:"November"})
})

module.exports = router;