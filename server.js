const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const mongoose = require("mongoose");
const cheerio = require("cheerio");

// Express setup
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Connection information
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Database
const db = require("./models");
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Routes
app.get("/", (req, res) => {
    res.render("home")
});

app.listen(PORT, () => {
    console.log("Listening on https://localhost:" + PORT);
    
});