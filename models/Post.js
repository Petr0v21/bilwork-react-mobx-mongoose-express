const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  category: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  // img: {
  //   data: Buffer,
  //   contentType: String,
  // },
  socmedia: {
    viber: { type: String, required: true },
    telegram: { type: String, required: true },
    instagram: { type: String, required: true },
  },
  img: { type: String, required: true },
  comments: [
    {
      stars: { type: Number, required: true },
      name: { type: String, required: true },
      text: { type: String, required: true },
    },
  ],
});

module.exports = model("Post", schema);
