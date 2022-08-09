const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const redWineSchema = new Schema({
  name:{
    type: String,
    required: [true, "name field is required"],
    trim: true,
    unique: [true, "name field should be unique"]
  },
  priceByGlass: {
    type: Number,
    required: [true, "price field is required"]
  },
  priceByBottle: {
    type: Number,
    required: [true, "price field is required"]
  },
  storeItem: {
    type: Array,
    required: [true, "store item field is required"]
  },
  imgUrl: {
    type: String,
    trim: true,
    required: [true, "image Url field is required"]
  },
  description: {
    type: String,
    trim: true,
    required: [true, "description field is required"]
  }
});

const RedWine = mongoose.model('RedWine', redWineSchema);
module.exports = RedWine;
