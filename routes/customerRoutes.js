
const express = require("express");

const router = express.Router();

const Customer = require('../models/customer');

router.get("/getallcustomers", async(req, res) => {

    try {
        const customers = await Customer.find({});
       res.send(customers);

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;