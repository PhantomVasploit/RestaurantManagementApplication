const express = require('express')
const router = express.Router()

const { createReservation, getReservations, getSales, getReservationsByDate, updateReservation, deleteReservation } = require('../controller/reservation.controller')
const { requireAuth } = require('../middleware/auth.middleware')

router.post('',  createReservation)
router.get('/sales', getSales)
router.get('/date/:date', getReservationsByDate)
router.get('/:customerEmail',  getReservations)
router.put('/:reservationId',  updateReservation)
router.delete('/:reservationId',  deleteReservation)


module.exports = router