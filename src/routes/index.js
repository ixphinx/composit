const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.ejs');
});

router.get('/login', (req, res)=>{
    res.render('login.ejs');
});

router.get('/registro', (req, res)=>{
    res.render('registro.ejs');
});

router.get('/clasica', (req, res)=>{
    res.render('generos/clasica.ejs');
});

router.get('/electronica', (req, res)=>{
    res.render('generos/electronica.ejs');
});

router.get('/folklore', (req, res)=>{
    res.render('generos/folklore.ejs');
});

router.get('/freestyle', (req, res)=>{
    res.render('generos/freestyle.ejs');
});

router.get('/grunge', (req, res)=>{
    res.render('generos/grunge.ejs');
});

router.get('/lirica', (req, res)=>{
    res.render('generos/lirica.ejs');
});

router.get('/metal', (req, res)=>{
    res.render('generos/metal.ejs');
});

router.get('/otros', (req, res)=>{
    res.render('generos/otros.ejs');
});

router.get('/pop', (req, res)=>{
    res.render('generos/pop.ejs');
});

router.get('/rock', (req, res)=>{
    res.render('generos/rock.ejs');
});

router.get('/tango', (req, res)=>{
    res.render('generos/tango.ejs');
});

router.get('/trp', (req, res)=>{
    res.render('generos/trap.ejs');
});


module.exports = router;