const { getAllProperties, getProperty } = require("../controllers/propertyController");
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
  const properties = await getAllProperties();
  res.json({ properties: properties });
});

router.get("/:id", async (req, res) => {
  console.log(req.params)
  const id = req.params.id;
  console.log("try", id);
  const property = await getProperty(id);
  res.json({ property: property });
})

module.exports = router;