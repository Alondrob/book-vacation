const mongoose = require('mongoose');


const Schema = mongoose.Schema; 

const PropertySchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    liked: {
        type: Boolean,
        required: false     
    },
    image: {
        type: String,
        required: false
    },
    price: Number,
    updated: {
        type: Date,
        default: Date.now(),
    }
});

const PropertyModel = mongoose.model('PropertyModel', PropertySchema);

module.exports = PropertyModel;