const mongoose = require("mongoose");

const RegistroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  social: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Registro", RegistroSchema);
