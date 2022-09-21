const mongoose = require("mongoose");
const { schema } = require("./Property");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_host: {
    Boolean,
  },
  host_location: {
    type: String,
  },
  bookedProperties: {
      arrive: { type: Date },
      checkOut: { type: Date },
      bookedPlace: {
          type: mongoose.Types.ObjectId,
          ref: 'Property'
      },
    default: Date.now(),
  },
});

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;