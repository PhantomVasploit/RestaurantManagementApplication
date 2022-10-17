const express = require('express')
const router = express.Router()

const { createReservation, getReservations, updateReservation, deleteReservation } = require('../controller/reservation.controller')

router.post('', createReservation)
router.get('/:customerEmail', getReservations)
router.patch('/:reservationId', updateReservation)
router.delete('/:reservationId', deleteReservation)


module.exports = router