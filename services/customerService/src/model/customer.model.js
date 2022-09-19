const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const customerSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'firstName field is required']
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'lastName field is required']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'email field is required'],
    unique: [true, 'email field must be unique']
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: [true, 'phoneNumber field is required'],
    unique: [true, 'phoneNumber field must be unique']
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'password field is required']
  },
  permissions: {
    isAdmin: {
      type: Boolean,
      required: [false, "is admin permissions field must be provided"],
      default: false
    }
  }
});

customerSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
