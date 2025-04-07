const User = require("../models/User");

exports.addUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
};

exports.getUsers = async (req, res) => {
    const users = await User.find();
    users ? res.json(users) : res.status(404).send("Not Found");
};

exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    user ? res.json(user) : res.status(404).send("Not Fond");
};

exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    user ? res.json(user) : res.status(404).send("Not Found");
};

exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    user ? res.json(user) : res.status(404).send("Not Found");
};