const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const getDb = require('./db');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());

require('./routes')(app)

mongoose.connect(getDb("dbUri"));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.listen(8081, () => {
    console.log("Listening to port 8081");
})


