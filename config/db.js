const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async _ => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected");
    } catch (err) {
        console.log("Error Connection: ", err);
        process.exit(1);
    }
};

module.exports = connectDB;