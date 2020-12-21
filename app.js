const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//Add Faker
const faker =require('faker');
let fakerData = faker.lorem.sentence();


// routes
app.get("/", function(req, res) {
    res.render("index.html", {"fakerData":fakerData});
});

app.get("/following", function(req, res) {
    res.render("following.html");
});

app.get("/music", function(req, res) {
    res.render("music.html");
});

app.get("/anniversary", function(req, res) {
    res.render("anniversary.html");
});


// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});
