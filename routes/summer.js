var express = require('express')
var router = express.Router()

router.get('/june', (req,res) =>{
    res.render('month', {season:'summer',month:"June"})
})
router.get('/july', (req,res) =>{
    res.render('month', {season:'summer',month:"July"})
})
router.get('/august', (req,res) =>{
    res.render('month', {season:'summer',month:"August"})
})

module.exports = router;