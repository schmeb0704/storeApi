require("dotenv").config()
const express = require("express")
const notFound = require("./middleware/not_found")
const errorHandler = require("./middleware/error-handler")
const products = require("./routes/products")
const connectDB = require("./db/connect")
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.get("/", (req, res)=>{
  res.status(200).send(`<h1 style="font-family: Arial">Store API</h1> <a style="font-family: Arial" href="/api/v1/products">Products</a>`)
})

app.use("/api/v1/products", products)

app.use(notFound)
app.use(errorHandler)


const start = async () =>{
  try {
    await connectDB(process.env.MONGO_URI)
    console.log("Connected to DB");
    app.listen(port, ()=>{
      console.log(`Server is listening on port ${port}`);
    }
)

  } catch (error) {
    console.log(error);    
  }
}


start()