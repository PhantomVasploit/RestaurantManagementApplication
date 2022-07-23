const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const chefSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'firstName field is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'lastName field is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'email field is required'],
    unique: [true, 'email field must be unique'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'pasword field is required']
  },
  permissions: {
    isAdmin: {
      type: Boolean,
      required: [true, 'permissions field is required'],
      default: false
    }
  }
});

chefSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Chef = mongoose.model('Chef', chefSchema);
module.exports = Chef;
