const transactionRoutes = require('express').Router()
const transactionController = require('../contollers/transactionController')

transactionRoutes.post('/createtransaction', transactionController.sendMoney)
transactionRoutes.get('/getsentmoney/:userId', transactionController.getsentmoney)
transactionRoutes.get('/getreceivedmoney/:userId', transactionController.getreceivedmoney)


module.exports = transactionRoutes