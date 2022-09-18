const PropertyModel = require("../models/properties");

/**
  
@returns back all properties;
 */
const getAllProperties = async () => {
  return PropertyModel.find().exec();
};

/**
 *
 * @param {string} id
 * @returns property by ID
 */
const getProperty = async (id) => {
  //Todo , get specific property by ID
  return PropertyModel.findById(id).exec();
};

/**
 * 
 * @param {*} req 
 * @param {*} res
 * @sets a save operation on a specific property; 
 */
const saveProperty = async (req, res) => {
  const body = req.body;
  const foundProperty = await PropertyModel.findById(body.id).exec();
  !foundProperty && res.json({ error: "Property was not found" });
  try {
    res.json(foundProperty);
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
/**
 
  @param {mongoDbId} id , to retrieve 
 */
const getAllSavedProperties = async (id) => {
  try {
    const properties = await PropertyModel.find();
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};

// get specific property

const getSpecificProperty = async (req, res) => {
  const body = req.body;
  const foundProperty = await PropertyModel.findById(body.id).exec();
  !foundProperty && res.json({ error: "Property was not found" });
  try {
    res.json(foundProperty);
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};

// unmark saved property

const deleteSavedProperty = async (req, res) => {
  const body = req.body;
  const foundProperty = await PropertyModel.findById(body.id).exec();
  !foundProperty && res.json({ error: "Property was not found" });
  try {
    await foundProperty.remove().exec();
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};



module.exports = { getAllProperties, getProperty };
