const express = require('express');

const router = express.Router();
const { register, login, updateCustomerAccount, deleteCustomerAccount } = require('../controller/customer.controller');

router.post('/register');
router.post('/login');
router.put('/:customerId');
router.delete('/:customerId');

module.exports = router;
