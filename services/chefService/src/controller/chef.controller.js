const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Chef = require('../model/chef.model');
const { createToken } = require('../utils/json.token');
const { producer } = require('../config/producer.config');
const exchangeName = 'chef';

module.exports.register = (req, res)=>{
  const { firstName, lastName, email, password } = req.body;
  Chef.create({ firstName, lastName, email, password })
  .then((chef)=>{
    const jwt = createToken(_.pick(chef, ['_id', 'permissions']));
    producer(exchangeName, 'create', JSON.stringify(chef));
    res.status(201).json({message: 'Chef account created successfully', jwt, chef: _.pick(chef, ['_id', 'firstName', 'lastName', 'email'])});
  })
  .catch((e)=>{
    throw e;
  })
}

module.exports.login = async (req, res)=>{
  try {
    const { email, password } = req.body;
    const chef = await Chef.findOne({email});
    if(!chef){
      res.status(400).json({message: 'Inavlid login credentials'});
    }else {
      const auth = await bcrypt.compare(password, chef.password);
      if(!auth){
        res.status(400).json({message: 'Invalid login credentials'});
      }else {
        const jwt = createToken(_.pick(chef, ['_id', 'permissions']));
        res.status(200).json({message: 'Login successful', jwt, chef: _.pick(chef, ['_id', 'firstName', 'lastName', 'email'])});
      }
    }
  } catch (e) {
    throw e;
  }
}


module.exports.updateChefAccount = (req, res)=>{
  const { firstName, lastName, email } = req.body;
  const toId = mongoose.Types.ObjectId;
  const chefId = toId(req.params.chefId);
  Chef.findOneAndUpdate({ _id: chefId }, { firstName, lastName, email })
  .then((chef)=>{
    producer(exchangeName, 'update', JSON.stringify({firstName, lastName, email, oldMail: chef.email}));
    res.status(200).json({message: 'Chef account is updated successfully'})
  })
  .catch((e)=>{
    throw e;
  })
}

module.exports.deleteChefAccount = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const chefId = toId(req.params.chefId);
  Chef.findOneAndRemove({_id: chefId})
  .then((chef)=>{
    producer(exchangeName, 'delete', JSON.stringify(chef));
    res.status(200).json({message: 'Chef account deleted successfully', chef})
  })
  .catch((e)=>{
    throw e;
  })
}
