const _ = require('lodash');
const bcrypt = require('bcrypt');

const Admin = require('../model/admin.model');
const { createToken } = require('../utils/json.token')

module.exports.register = async (req, res)=>{
  const { firstName, lastName, email, phoneNumber, password } = req.body.body;
  const registeredAdmin = await Admin.findOne({email})
  if(!registeredAdmin){
    Admin.create({ firstName, lastName, email, phoneNumber, password })
      .then((admin)=>{
        const jwt = createToken(_.pick(admin, ['_id', 'permissions']));
        res.status(201).json({message: 'Administrator account created successfully', jwt, admin: _.pick(admin, ['_id', 'firstName', 'lastName', 'email', 'phoneNumber'])});
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
    const admin = await Admin.findOne({email});
    if(!admin){
      res.status(400).json({ message: 'Invalid Login Credentials' })
    }else {
      const auth = await bcrypt.compare(password, admin.password);
      if(!auth){
        res.status(400).json({message: 'Invalid Login Credentials'});
      }else {
        const jwt = createToken(_.pick(admin, ['_id', 'permissions']))
        res.status(200).json({ message: 'Login successful', admin: _.pick(admin, ['_id', 'firstName', 'lastName', 'email', 'phoneNumber']), jwt });
      }
    }
  } catch (e) {
    throw e;
  }
}
