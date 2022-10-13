const mongoose = require("mongoose");
const PropertyModel = require("./Property");
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
    type: Boolean,
    required: false,
  },
  host_location: {
    type: String,
  },
  properties: [{
    type: mongoose.Types.ObjectId,
    ref: 'PropertyModel'
  }],

  booked: {
    dateIn: { type: Date },
    dateOut: { type: Date },
    place: {
      type: mongoose.Types.ObjectId,
      ref: PropertyModel,
    },
  },
});

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
