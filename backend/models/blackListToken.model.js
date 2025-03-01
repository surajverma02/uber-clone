const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

const blackListTokenModel = mongoose.model("BlackListToken", blackListTokenSchema);

module.exports = blackListTokenModel;
