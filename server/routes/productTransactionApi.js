const express= require("express")
const router = express.Router()
const { apiRouteControllers}= require("../controllers/apiRouteControllers")
const {transactionControllers} = require("../controllers/transactionControllers")
const { statisticsApiControllers } = require("../controllers/statisticsApiControllers")


router.get('/initialize-transaction',apiRouteControllers)
router.get("/list-transactions",transactionControllers)
router.get("/statistics/:month",statisticsApiControllers)


  module.exports= router
