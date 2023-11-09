const moment = require('moment');
const { Item } = require('../modals/productModel');


// Create an API to list the all transactions

const transactionControllers=async(req,res)=>{
   try {

      const { month, page = 1, perPage = 10, search = '' } = req.query;
    
      // Filter transactions based on the specified month

      const transactions = await Item.find();
      const filteredTransactions = transactions.filter(transaction => {
        const transactionMonth = new Date(transaction.dateOfSale).getMonth() + 1;
        
        return transactionMonth === parseInt(month, 10);

      });
    
      // Apply search filter if the search parameter is provided
      const searchResults = filteredTransactions.filter(transaction => {
        const { title, description, price } = transaction;
        const searchPattern = new RegExp(search, 'i');
        return searchPattern.test(title) || searchPattern.test(description) || searchPattern.test(price.toString());
      });
    
      // Calculate pagination offsets
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + parseInt(perPage, 10);
    
      // Paginate the results
      const paginatedResults = searchResults.slice(startIndex, endIndex);
    
      res.json({ transactions: paginatedResults });
    
    
   } catch (error) {
    console.log("error==",error);
   }
}

 module.exports={ transactionControllers}