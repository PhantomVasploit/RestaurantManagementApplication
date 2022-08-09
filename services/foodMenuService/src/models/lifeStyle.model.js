const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const lifeStyleSchema = new Schema({
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
  },
  imgUrl: {
    type: String,
    trim: true,
    required: [true, "image Url field is required"]
  }
});

const LifeStyle = mongoose.model('LifeStyle', lifeStyleSchema);
module.exports = LifeStyle;
