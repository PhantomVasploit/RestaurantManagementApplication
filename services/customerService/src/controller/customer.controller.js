const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Customer = require('../model/customer.model');
const { createToken } = require('../utils/json.token');

module.exports.register = async (req, res)=>{
  const { firstName, lastName, email, phoneNumber, password } = req.body.body;
  const registeredCustomer = await Customer.findOne({email})
  if(!registeredCustomer){
    Customer.create({ firstName, lastName, email, phoneNumber, password })
      .then((customer)=>{
        const jwt = createToken(_.pick(customer, ['_id', 'permissions']));
        res.status(201).json({message: 'Customer account created successfully', jwt, customer: _.pick(customer, ['_id', 'firstName', 'lastName', 'email', 'phoneNumber'])});
      })
      .catch((e)=>{
        throw e;
      })
  }else{
    res.status(400).json({message: 'The email is registered'});
  }
}

module.exports.login = async(req, res)=>{
  try {
    const { email, password } = req.body.body;
    const customer = await Customer.findOne({email});
    if(!customer){
      res.status(400).json({message: 'Invalid login credentials'});
    }else {
      const auth = await bcrypt.compare(password, customer.password);
      if(!auth){
        res.status(400).json({message: 'Invalid login credentials'});
      }else {
        const phoneNumber = customer.phoneNumber.toString().substring(1)
        const jwt = createToken({_id: customer._id, permissions: customer.permissions, phoneNumber});
        res.status(200).json({message: 'Login successful', jwt, customer: _.pick(customer, ['_id', 'firstName', 'lastName', 'email', 'phoneNumber'])});
      }
    }
  } catch (e) {
    throw e;
  }
}

module.exports.updateCustomerAccount = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const customerId = toId(req.params.customerId);
  const { firstName, lastName, email, phoneNumber } = req.body
  Customer.findOneAndUpdate({ _id: customerId }, { firstName, lastName, email, phoneNumber })
  .then(()=>{
    res.status(200).json({message: 'Customer account updated successfully'})
  })
  .catch((e)=>{
    throw e;
  })
}

module.exports.deleteCustomerAccount = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const customerId = toId(req.params.customerId);
  Customer.findOneAndRemove({ _id: customerId })
  .then((customer)=>{
    res.status(200).json({message: 'Customer account deleted successfully'});
  })
  .catch((e)=>{
    throw e;
  })
}


module.exports.getCustomers = (req, res)=>{
  Customer.find({})
  .then((customers)=>{
    res.status(200).json({message: "Fetch successful", customers});
  })
  .catch((e)=>{
    throw e;
  })
}