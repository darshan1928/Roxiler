const mongoose = require("mongoose")
const db = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.URL);
        console.log(`server runing @${connection.host}`);
    } catch (error) {
        console.log("error is==", error);
    }
}





module.exports = db