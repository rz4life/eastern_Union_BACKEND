const userRoutes = require('express').Router()
const userController = require('../contollers/userController')


userRoutes.post ('/signup', userController.create)
userRoutes.post ('/login', userController.login)
userRoutes.get ('/getuser/:userId', userController.getuser)
userRoutes.put ('/editprofile/:userId', userController.editprofile)


module.exports = userRoutes