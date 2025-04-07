const mongoose = require("mongoose");

const connectDB = async _ => {
    try {
        await mongoose.connect("mongodb://localhost:27018/shop");
        console.log("Connected");
    } catch (err) {
        console.log("Error Connection: ", err);
        process.exit(1);
    }
};

module.exports = connectDB;