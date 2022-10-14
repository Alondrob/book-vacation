const {
  getAllProperties,
  getProperty,
  getUserProperties,
  createProperty, 
  editProperty,
  saveProperty, 
  bookProperty,
} = require("../controllers/propertyController");

const { loggedInMiddleware } = require("../middleware/loggedInMidellware");

const express = require("express");

const router = express.Router();

router.get("/", getAllProperties);
router.get("/:id", getProperty);
router.post("/create-property",loggedInMiddleware, createProperty);
router.put("/edit-property",loggedInMiddleware, editProperty);
router.post("/save-property",loggedInMiddleware, saveProperty);
router.post("/book-property",loggedInMiddleware, bookProperty);







module.exports = router;
