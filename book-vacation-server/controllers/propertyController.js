const { json } = require("body-parser");
const { distructObj } = require("../helpers/distruct");
const PropertyModel = require("../models/Property");

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
  console.log("hitting the route", req.body)
  // const body = { ...req.body };
  const property = new PropertyModel(req.body);
 console.log(property)
  try {
    await property.save();
    res.status(201).json({ property: property });
  } catch (err) {
    res.status(400).json({ error: "what is the errror" });
  }
};

const editProperty = async (req, res) => {
  const propertyId = req.params.id;
  const body = { ...req.body };
  const originProperty = await PropertyModel.findById(propertyId).exec();
  //find one and update;
  // const updatedProperty = await PropertyModel.findOneAndUpdate({id: req.query.id }, body).exec();
  await originProperty.remove();
  const newProperty = new PropertyModel(body);
  try {
    await property.save();
    res.status(201).json({ property: property });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteProperty = async (req, res) => {
  const propertyId = req.params.id;
  try {
    const property = await PropertyModel.findById(propertyId).exec();
    await property.remove();
    res.json("Property Was Deleted");
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

 const bookProperty = async (req, res) => {
  console.log("hitting the route", req.body)
  // const objModel = distructObj(req.body);
  const property = PropertyModel.findById(req.body._id);
  property.fromDate = new Date(req.body.fromDate);
  property.toDate = new Date(req.body.toDate);
  try {
    await   
    property.save();
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
  saveProperty,
  bookProperty
};

