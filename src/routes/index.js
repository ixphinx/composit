const express = require('express');
const router = expres.Router();

router.get('/', (req, res)=>{
    res.render('index.ejs');
});

module.exports = router;