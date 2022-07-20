const _ = require('lodash');
const bcrypt = require('bcrypt');

const Admin = require('../model/admin.model');
const { createToken } = require('../utils/json.token')

module.exports.register = (req, res)=>{
  const { firstName, lastName, email, password } = req.body;
  Admin.create({firstName, lastName, email, password})
  .then((admin)=>{
    const jwt = createToken(_.pick(admin, ['_id', 'permissions']));
    res.status(201).json({ message: 'Administrator account created successfully', admin: _.pick(admin, ['_id', 'firstName', 'lastName', 'email']), jwt });
  })
  .catch((e)=>{
    throw e;
  })
}

module.exports.login = async(req, res)=>{
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({email});
    if(!admin){
      res.status(400).json({ message: 'Invalid Login Credentials' })
    }else {
      const auth = await bcrypt.compare(password, admin.password);
      if(!auth){
        res.status(400).json({message: 'Invalid Login Credentials'});
      }else {
        const jwt = createToken(_.pick(admin, ['_id', 'permissions']))
        res.status(200).json({ message: 'Login successful', admin: _.pick(admin, ['_id', 'firstName', 'lastName', 'email']), jwt });
      }
    }
  } catch (e) {
    throw e;
  }
}
