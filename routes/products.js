const express = require("express")
const router = express.Router()
const products = require("../products.json")

router.route("/").get((req, res)=>{
  res.status(200).json(products)
})

module.exports = router