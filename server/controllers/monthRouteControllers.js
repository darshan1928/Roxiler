const axios = require("axios");
const { Item } = require("../modals/productModel"); 

async function monthRouteControllers(req, res) {
    
        try {
          
            const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
            const data = response.data;
        console.log("data==",data);
           
        dd
            res.json({ message: "Database initialized with seed data." });
          } catch (error) {
            console.error("Initialization error:", error);
            res.status(500).json({ error: "Failed to initialize the database." });
          }
      
    
}

module.exports = { monthRouteControllers };
