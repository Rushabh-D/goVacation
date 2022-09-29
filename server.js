//1. basic server

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/login.html`);
});

app.get("/about-us", (req, res) => {
  res.sendFile(`${__dirname}/public/about-us.html`);
});

app.get("/contact-us", (req, res) => {
  res.sendFile(`${__dirname}/public/contact-us.html`);
});

app.get("/feedback", (req, res) => {
  res.sendFile(`${__dirname}/public/feedback.html`);
});


const productRouter = require("./routes/product-route");
app.use(productRouter);

const adminRouter = require("./routes/admin-routes");
app.use(adminRouter);

app.listen(3000, () => console.log("server started at 3000 port"));

