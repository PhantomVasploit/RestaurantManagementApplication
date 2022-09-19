const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const adminSchema = new Schema({
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
        trim: true,
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
      required: [true, 'password field is required']
    },
    permissions: {
      isAdmin: {
        type: Boolean,
        required: [true, 'permissions field is required'],
        default: true
      }
    }
});

adminSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
