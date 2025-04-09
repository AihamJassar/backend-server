const productController = require("../controllers/productController");
const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth");

router.post("/", protect, productController.addProduct);

router.get("/", productController.getProducts);

router.get("/:id", productController.getProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
