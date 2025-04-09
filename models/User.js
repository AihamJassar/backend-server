const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Required"],
    trim: true,
    minlength: [3, "Too Short"],
    manlength: [30, "Too Long,"],
  },
  email: {
    type: String,
    required: [true, "Required"],
    unique: true,
    lowercase: true,
    //match: [/\s+@\s+\.s+/, "Invalid email"],
  },
  password: {
    type: String,
    required: [true, "Required"],
    minlength: [8, "Too short"],
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
