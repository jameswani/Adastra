const mongoose = require("mongoose");

const busSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    route: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    origin:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    depart:{
        type: String,
        required: true
    },
    arrive:{
        type: String,
    },
    date:{
        type: String,
        required: true
    },
    imageurl:{
        type: String,
        required: true
    }

},{
    timestamps: true
});

const busModel = mongoose.model("bus", busSchema);

module.exports = busModel;

