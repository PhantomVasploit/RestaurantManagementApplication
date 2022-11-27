const express = require('express')
const router = express.Router()

const { seedStock, getAllStock, getStock, getStockAndDate, addQuantityPurchased, updateStock, deleteStock } = require('../controller/stock.controller')

router.post('/seed', seedStock)
router.get('', getAllStock)
router.get('/:stockId', getStock)
router.get('/purchase/:itemName', getStockAndDate)
router.post('/purchase', addQuantityPurchased)
router.put('/:stockId', updateStock)
router.delete('/:stockId', deleteStock)

module.exports = router