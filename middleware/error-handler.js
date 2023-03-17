const errorHandler = async(err, req, res, next) =>{
  console.log(err);
  return res.status(500).json({error: err, msg: "Something went wrong"})
}

module.exports = errorHandler