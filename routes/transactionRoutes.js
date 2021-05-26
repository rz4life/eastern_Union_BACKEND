const transactionRoutes = require('express').Router()
const transactionController = require('../contollers/transactionController')

transactionRoutes.post('/createtransaction', transactionController.sendMoney)


module.exports = transactionRoutes