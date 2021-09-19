console.log("Server-side code running");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen((PORT), () => {
    console.log('listening on deployed server');
});