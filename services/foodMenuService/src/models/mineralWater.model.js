const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mineralWaterSchema = new Schema({
  name:{
    type: String,
    required: [true, "name field is required"],
    trim: true,
    unique: [true, "name field should be unique"]
  },
  price: {
    type: Number,
    required: [true, "price field is required"]
  },
  storeItem: {
    type: Array,
    required: [true, "store item field is required"]
  }
});

const MineralWater = mongoose.model('MineralWater', mineralWaterSchema);
module.exports = MineralWater;
