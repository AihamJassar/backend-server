const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    products ? res.json(products) : res.status(404).send("Not Found");
};

exports.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    product ? res.json(product) : res.status(404).send("Not Found");
};

exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    product ? res.json(product) : res.status(404).send("Not Found");
};

exports.deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    product ? res.json(product) : res.status(404).send("Not Found");
};