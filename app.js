const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const router = require('./routes/product.routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());


app.use(router);


app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get("*", (req, res) => {
    res.send("<h2>404 Page Not Found!!</h2>")
});

module.exports = app;