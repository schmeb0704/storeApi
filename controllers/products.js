const products = require("../products.json")
const Product = require("../models/Product")



const getAllProductsStatic = async(req, res) => {
  const products = await Product.find({})
  res.status(200).json({success: true, products})
}

const getAllProducts = async(req, res) => {
  res.status(200).json({msg: "product route"})
}





module.exports = {getAllProducts, getAllProductsStatic}