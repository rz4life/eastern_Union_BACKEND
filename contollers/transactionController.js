const models = require('../models')
const transactionController = {}
const jwt = require('jsonwebtoken')
require('dotenv').config()

transactionController.sendMoney = async (req, res) =>{

    try {
        const encryptedId = req.body.sendingUserId
        const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)


        const transaction = await models.transaction.create({
           sendingUserId: decryptedId.userId,
           amount: req.body.amount,
           receivingUserId: req.body.receivingUserId
        })

        res.json({transaction})
        
    } catch (error) {
        res.json({ error })
    }
}

transactionController.getsentmoney = async (req,res)=>{

    try {

        const encryptedId = req.params.userId
        const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)


        const getsent = await models.transaction.findAll({
            where:{
                sendingUserId: decryptedId.userId
            },
            include:'friend'
        })
        res.json({getsent})
        
    } catch (error) {
        res.json({ error })
    }
}


transactionController.getreceivedmoney = async (req,res)=>{

    try {
        const encryptedId = req.params.userId
        const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)

        const getreceived = await models.transaction.findAll({
            where:{
             receivingUserId: decryptedId.userId
            },
            include:'friend'
        })
        res.json({getreceived})
        
    } catch (error) {
        res.json({ error })
    }
}
module.exports = transactionController


