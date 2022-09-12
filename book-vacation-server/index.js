const express = require("express");
const mongoose = require("mongoose");
const PropertyModel = require("./models/properties");
const bodyParser = require('body-parser');
const { getAllProperties, getProperty } = require('./controllers/propertyController');
const propertyRouter = require('./routes/propertiesRoutes');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDBUrl =
  "mongodb+srv://adrob1983:Lam1910@book-vacation-cluster.vqjxuoh.mongodb.net/bookVacDB?retryWrites=true&w=majority";

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongodb connection error;"));

app.use("/property", propertyRouter);

app.post("/save-property", async (req, res) => {
    const body = req.body;
    const foundProperty = await PropertyModel.findById(body.id).exec();
    if (!foundProperty) {
        return res.json({error: "not found"})
    }
    foundProperty.name = body.name;
    foundProperty.price = body.price;
    try {
        await foundProperty.save();
       res.json(foundProperty);  
    } catch (err) {
        console.error(err)
        res.json({error: err.message})
    }
    

});



app.listen(3001, () => console.log("Server is running!"));
