const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expense')
router.get('/expenses',expenseController.getExpense)

router.post('/expense',expenseController.postExpense)

router.put('/expense/:id',expenseController.putExpense)

router.delete('/expense/:id',expenseController.deleteExpense)

module.exports = router

