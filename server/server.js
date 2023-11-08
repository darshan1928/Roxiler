const express = require("express")
const axios = require("axios")
const app = express()
const cors = require("cors")
const monthRoute = require("./routes/monthRoute")
const dotenv = require("dotenv")
const  db  = require("./db/db")
dotenv.config();
const PORT = process.env.PORT || 8889
app.use(express.json())
app.use(cors())


db()
app.use("/initialize-database", monthRoute);
// app.get('/', async (req, res) => {

//     const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
//     res.json(response.data)
// })



app.listen(PORT, () => { console.log(`Server running @ ${PORT}`) })