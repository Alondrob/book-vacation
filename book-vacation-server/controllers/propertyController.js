const { json } = require("body-parser");
const { distructObj, bookedDates } = require("../helpers/distruct");
const PropertyModel = require("../models/Property");
const UserModel = require("../models/User");

const getAllProperties = async (req, res) => {
  const properties = await PropertyModel.find().exec();
  res.json({ properties: properties });
};

const getProperty = async (req, res) => {
  const id = req.params.id;
  const property = await PropertyModel.findById(id).exec();
  res.json({ property: property });
};

const createProperty = async (req, res) => {
  const user = await UserModel.findOne({ email: req.user.email });
  const newInstanceData = distructObj(req.body, user);
  const property = new PropertyModel(newInstanceData);
  user.properties.push(property.toObject());
  user.is_host = true;
  try {
    await property.save();
    await user.update(user);
    res.status(201).json({ property: property });
  } catch (err) {
    res.status(400).json({ error: "what is the errror" });
  }
};

const editProperty = async (req, res) => {
  const user = await UserModel.findOne({ email: req.user.email });
  const foundProperty = await PropertyModel.findById(req.body.id).exec();
  const newInstanceData = distructObj(req.body, user);
  await foundProperty?.update(newInstanceData);

  try {
    await foundProperty.save();
    res.status(201).json({ property: foundProperty });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteProperty = async (req, res) => {
  
  const property = await PropertyModel.findById(req.params.id).exec();

  try {
    await property?.remove();
    res.json("Property Was Deleted");
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const bookProperty = async (req, res) => {
  const user = await UserModel.findById(req.user._id).exec();
  const property = await PropertyModel.findById(req.body.id).exec();
  const bookedDatesArray = bookedDates(req.body.fromDate, req.body.toDate);
  property.booking.bookedBy = req.user;
  property.booking.dates = bookedDatesArray;
  user.bookings.push({ place: property, dates: bookedDatesArray });
  // user && (user.bookings.place = property);
  try {
    await property.save();
    await user.save();
    res.status(201).json({ property: property });
  } catch (err) {
    res.status(400).json({ error: "what is the errror" });
  }
};

const saveProperty = async (req, res) => {
  const body = req.body;
  const foundProperty = await PropertyModel.findById(body.id).exec();
  if (!foundProperty) {
    return res.json({ error: "not found" });
  }
  foundProperty.name = body.name;
  foundProperty.price = body.price;
  try {
    await foundProperty.save();
    res.json(foundProperty);
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};

//

module.exports = {
  getAllProperties,
  getProperty,
  createProperty,
  editProperty,
  deleteProperty,
  saveProperty,
  bookProperty,
};
