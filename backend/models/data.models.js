const mongoose = require("mongoose");

const dataModel = mongoose.model(
  "dataModel",
  new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
  })
);

module.exports = dataModel;
