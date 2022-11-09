const express = require('express')
const axios = require('axios')
const router = express.Router()

const { requireAuth } = require('../middleware/auth.middleware')
const { generateToken } = require('../middleware/mpesaAuthToken')
const { mpesaStkPushRequest, mpesaStkCallBack } = require('../controller/mpesaPaymentController')

router.post('/stk-push', generateToken, mpesaStkPushRequest)
router.post('/stk-push/callback', mpesaStkCallBack)


module.exports = router