var express = require('express')
var router = express.Router()

router.get('/march', (req,res) =>{
    res.render('month', {season:'spring',month:"January"})
})
router.get('/april', (req,res) =>{
    res.render('month', {season:'spring',month:"April"})
})
router.get('/may', (req,res) =>{
    res.render('month', {season:'spring',month:"May"})
})

module.exports = router;