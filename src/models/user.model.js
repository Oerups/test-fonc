const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: false, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "ROLE_USER" },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
