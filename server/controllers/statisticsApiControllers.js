const { Item } = require("../modals/productModel");
const moment = require("moment")




const statisticsApiControllers = async (req, res) => {


  try {
    const selectedMonth = parseInt(req.params.month);

    if (isNaN(selectedMonth) || selectedMonth < 1 || selectedMonth > 12) {
      return res.status(400).json({ error: 'Invalid month provided' });
    }

    const monthExpression = { $month: { $dateFromString: { dateString: "$dateOfSale" } } };

    const totalSaleAmount = await Item.aggregate([
      {
        $match: {
          $expr: {
            $eq: [monthExpression, selectedMonth],
          },
          sold: true,
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$price" },
        },
      },
    ]);

    const totalSoldItems = await Item.countDocuments({
      $expr: { $eq: [monthExpression, selectedMonth] },
      sold: true,
    });

    const totalNotSoldItems = await Item.countDocuments({
      $expr: { $eq: [monthExpression, selectedMonth] },
      sold: false,
    });

    res.json({
      totalSaleAmount: totalSaleAmount[0] ? totalSaleAmount[0].totalAmount : 0,
      totalSoldItems,
      totalNotSoldItems,
    });

  } catch (error) {
    console.log("error==", error);
  }

}






module.exports = { statisticsApiControllers }