const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");

const PORT = 8080;

connectDB();

app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, _ => console.log(`Server running on port ${PORT}`));