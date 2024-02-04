const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

//Import Modules
const router = require('./routes/user.route');


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());

app.use(router);


// Home and 404 Routes
app.get('/', (req, res) => {
res.send("Welcome to home page!");
});

app.get('*', (req, res) => {
    res.send("404 Page Not Found");
});

module.exports = app;