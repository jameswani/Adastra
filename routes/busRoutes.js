
const express = require("express");

const router = express.Router();

const Bus = require('../models/bus');

router.get("/getallbuses", async(req, res) => {

    try {
        const buses = await Bus.find({});
       res.send(buses);

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;