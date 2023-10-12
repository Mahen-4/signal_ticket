const express = require('express')
const router = express.Router()

const controller = require('../controllers/userController')

router.get("/", controller.getUsers)
router.get("/userInfo", controller.getUserInfo)
router.post("/userCreation", controller.createUser)
router.post("/loginUser", controller.loginUser)

module.exports = router

