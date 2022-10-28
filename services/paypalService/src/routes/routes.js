const express = require('express')
const router = express.Router()

const { initiatePayment, paymentSuccess, cancelPayment } = require('../controller/paypal.controller')
const { requireAuth } = require('../middleware/auth.middleware')

router.post('/paypal/pay',  initiatePayment)
router.get('/paypal/success', paymentSuccess)
router.get('/paypal/cancel', cancelPayment)

module.exports = router