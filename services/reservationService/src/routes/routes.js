const express = require('express')
const router = express.Router()

const { createReservation, getReservations, updateReservation, deleteReservation } = require('../controller/reservation.controller')
const { requireAuth } = require('../middleware/auth.middleware')

router.post('',  createReservation)
router.get('/:customerEmail', requireAuth, getReservations)
router.put('/:reservationId', requireAuth, updateReservation)
router.delete('/:reservationId', requireAuth, deleteReservation)


module.exports = router