const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then((err) => {
    if(err) {
        console.error(`Database Connection Error: ${err.message}`);
    }
    console.log(`Database Connected Successfully`);
})

module.exports = app;