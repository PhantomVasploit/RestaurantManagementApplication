const express = require('express');

const router = express.Router();
const { register, login, updateChefAccount, deleteChefAccount } = require('../controller/chef.controller');

router.post('/register', register);
router.post('/login', login);
router.put('/:chefId', updateChefAccount);
router.delete('/:chefId', deleteChefAccount);

module.exports = router;
