const express = require('express');

const router = express.Router();
const { register, login, updateCustomerAccount, deleteCustomerAccount } = require('../controller/customer.controller');

router.post('/register', register);
router.post('/login', login);
router.put('/:customerId', updateCustomerAccount);
router.delete('/:customerId', deleteCustomerAccount);

module.exports = router;
