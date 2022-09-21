const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [300, "Please enter description of 300 characters"],
  },
  location: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  attributes: {
    bedrooms: { type: Number, required: true },
    noOfBeds: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    guests: { type: Number, required: true },
    propertyType: { type: String },
    amenities: [String],
  },
  liked: {
    type: Boolean,
    required: false,
  },
  image: {
    type: [{ type: String }],
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
    },
    availability: {
        fromDate: { type: Date },
        toDate: {type: Date}
    },
    
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: "User"
    },
    bookedBy: {
        type: [mongoose.Types.ObjectId],
        ref: "User"
    },

  updated: {
    type: Date,
    default: Date.now(),
  },
});

const PropertyModel = mongoose.model("PropertyModel", PropertySchema);

module.exports = PropertyModel;
