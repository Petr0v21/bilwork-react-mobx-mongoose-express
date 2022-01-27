const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  politic: { type: Boolean },
  terms: { type: Boolean },
  posts: [{ type: Number, required: true }],
});

module.exports = model("User", schema);
