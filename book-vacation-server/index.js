const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PropertyModel = require("./models/Property");
const bodyParser = require('body-parser');
const propertyRouter = require('./routes/propertiesRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(cors());
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

// property routes
app.use("/property", propertyRouter);
// app.use("/property/:id", propertyRouter);
// app.use("/property/save-property", propertyRouter);
// app.use("/property/create-property", propertyRouter);

// user routes
app.use("/user", userRouter);
// app.use("/user/edit-user", userRouter);
// app.use("/user/delete-user", userRouter);



app.listen(3001, () => console.log("Server is running!"));
