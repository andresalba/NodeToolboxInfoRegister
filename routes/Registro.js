const router = require('express').Router();
const Registro = require("./../models/Registro");

// Routes
router.post("/add/register", (req, res) => {
    const newRegistro = new Registro(req.body)
    newRegistro.save()
    .then(() => {
        console.log('Register added')
        res.redirect('/')
    })
    .catch((err) => {console.log(err)})
})

.get("/delete/register/:_id", (req, res) => {
    const { _id } = req.params;
    Registro.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Register Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router