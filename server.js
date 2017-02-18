'use strict';
const express = require('express');
const path = require("path");


var port = process.env.PORT || 8080;
const request = require('request');

const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies


app.post('/api/summaryBot', function (req, res) {
    console.log("Called now with this body: " + JSON.stringify(req.body));
});

