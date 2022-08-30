const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoDBUrl = "mongodb+srv://adrob1983:Lam1910@book-vacation-cluster.vqjxuoh.mongodb.net/bookVacDB?retryWrites=true&w=majority";

app.listen(3001, () => console.log("Server is running!"));

