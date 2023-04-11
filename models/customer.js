const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    lname: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bdate:{
        type: String,
        required: true
    }

},{
    timestamps: true
});

const customerModel = mongoose.model("customer", customerSchema);

module.exports = customerModel;

