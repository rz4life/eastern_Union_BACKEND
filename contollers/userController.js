const models = require('../models')
const userController = {}
const jwt = require('jsonwebtoken')
require('dotenv').config()


userController.create = async (req, res) =>{

    try {
        const user = await models.user.create ({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            userCard_num: req.body.userCard_num,
            userCard_name: req.body.userCard_name,
            userCard_exp: req.body.userCard_exp,
            balance: req.body.balance,
            prefered_currency: req.body.prefered_currency
        })
          const encryptedId = jwt.sign({userId: user.id}, process.env.JWT_SECRET)
          res.json({
            message:"user created",
            user: user,
            userId: encryptedId,
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

userController.login = async(req, res) => {
    try {
      const user = await models.user.findOne({
        where: { email: req.body.email }
      })
       const encryptedId = jwt.sign({userId: user.id}, process.env.JWT_SECRET)

       console.log(encryptedId)
      if (user.password === req.body.password) {
        res.json({            
          user: user,
          userId: encryptedId, 
          message: 'login successful' })
      } else {
        res.status(401).json({ message: 'login failed' })
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message })    
    }
}

userController.getuser = async (req, res) =>{

    try {
         const encryptedId = req.params.userId
         const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
         const user = await models.user.findOne({
        where : {
          id : decryptedId.userId
        }
      })
      res.json({user})

    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message }) 
    }
}




userController.editprofile = async (req, res) =>{

    try {
           const encryptedId = req.params.userId
           const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
           const user = await models.user.findOne({
            where : {
             id : decryptedId.userId
            }
           })
           console.log(user)
  
        let edit = await user.update(req.body)
        res.json({edit})
      
      
    } catch (error) {
      res.status(400).json({ error: error.message }) 
    }
}


module.exports = userController