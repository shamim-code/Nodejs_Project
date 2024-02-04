const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const router = require('./routes/user.route');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.get('*', (req, res) => {
    res.send("404 Page Not Found");
})



module.exports = app;