const express = require('express');

const router = express.Router();
const { register, login, updateChefAccount, deleteChefAccount, getAccounts } = require('../controller/chef.controller');

router.post('/register', register);
router.post('/login', login);
router.get('/accounts', getAccounts);
router.put('/:chefId', updateChefAccount);
router.delete('/:chefId', deleteChefAccount);

module.exports = router;
