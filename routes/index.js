const router = require('express').Router();
const Registro = require("./../models/Registro");

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/register', async(req, res) => {
    const allRegistro = await Registro.find()
    res.render("register", {registro: allRegistro})
});

module.exports = router;