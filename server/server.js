const express = require("express")
const cors = require("cors")
const productTransactionApi = require("./routes/productTransactionApi")
const dotenv = require("dotenv")
const db = require("./db/db")
const app = express()
dotenv.config();
const PORT = process.env.PORT || 8889
app.use(express.json())
app.use(cors())
db()
app.use("/", productTransactionApi);
app.listen(PORT, () => { console.log(`Server running @ ${PORT}`) })