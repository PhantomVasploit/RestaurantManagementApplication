const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Customer = require('../model/customer.model');
const { createToken } = require('../utils/json.token');
const { producer } = require('../config/producer.config');
const exchangeName = 'customer';

module.exports.register = (req, res)=>{
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  Admin.create({ firstName, lastName, email, phoneNumber, password })
  .then((customer)=>{
    const jwt = createToken(_.pick(customer, ['_id', 'permissions']));
    producer(exchangeName, 'create', JSON.stringify(customer));
    res.status(201).json({message: 'Customer account created successfully', jwt, customer: _.pick(customer, ['_id', 'firstName', 'lastName', 'email', 'phoneNumber'])});
  })
  .catch((e)=>{
    throw e;
  })
}

module.exports.login = async(req, res)=>{
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({email});
    if(!customer){
      res.status(400).json({message: 'Invalid login credentials'});
    }else {
      const auth = await bcrypt.compare(password, customer.password);
      if(!auth){
        res.status(400).json({message: 'Invalid login credentials'});
      }else {
        const jwt = createToken(_.pick(customer, ['_id', 'permissions']));
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
    producer(exchangeName, 'update', JSON.stringify({ firstName, lastName, email, phoneNumber }));
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
    producer(exchangeName, 'delete', JSON.stringify(customer));
    res.status(200).json({message: 'Customer account deleted successfully'});
  })
  .catch((e)=>{
    throw e;
  })
}
