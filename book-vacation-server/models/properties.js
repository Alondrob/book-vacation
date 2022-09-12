const mongoose = require('mongoose');


const Schema = mongoose.Schema; 

const PropertySchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    price: Number,
    updated: {
        type: Date,
        default: Date.now(),
    }
});

const PropertyModel = mongoose.model('PropertyModel', PropertySchema);

module.exports = PropertyModel;