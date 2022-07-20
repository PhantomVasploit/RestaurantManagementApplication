const express = require('express');
const router = express.Router();

const {register, login} = require('../controller/admin.controller');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
