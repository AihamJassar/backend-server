const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const authRouter = require("./routers/authRouter");
const User = require("./models/User");

const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);


app.listen(PORT, _ => console.log(`Server running on port ${PORT}`));