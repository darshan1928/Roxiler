const express= require("express")
const router = express.Router()
const {monthRouteControllers}= require("../controllers/monthRouteControllers")


router.get('/',monthRouteControllers)



  module.exports= router
