const {
  getAllProperties,
  getProperty,
  createProperty, 
  saveProperty, 
  newProperty
} = require("../controllers/propertyController");

const express = require("express");

const router = express.Router();

router.get("/", getAllProperties);
router.get("/:id", getProperty);
router.post("/create-property", createProperty);
router.post("/save-property", saveProperty);







module.exports = router;
