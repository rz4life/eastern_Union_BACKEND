const models = require('../models')
const transactionController = {}
const jwt = require('jsonwebtoken')
require('dotenv').config()

transactionController.sendMoney = async (req, res) =>{

    try {
        const transaction = await models.transaction.create({
           sending_userId: req.body.sending_userId,
           amount: req.body.amount,
           receiving_userId: req.body.receiving_userId
        })

        res.json({transaction})
        
    } catch (error) {
        res.json({ error })
    }
}



module.exports = transactionController
