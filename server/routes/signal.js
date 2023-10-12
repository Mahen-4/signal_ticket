const express = require('express')
const router = express.Router() 

const controller = require('../controllers/signalController')

router.post("/addSignal", controller.addSignal);
router.get("/allSignal", controller.allSignal);

module.exports = router
