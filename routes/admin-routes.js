const express = require("express");
const router = express.Router();
var path = require("path");

const viewhotels = require("../data/product-list");

router.get("/admin/new", (req, res) => {
  res.sendFile(path.resolve("./public/new.html"));
});

router.post("/admin/newHotel", (req, res) => {
  console.log(req.body);
  const hotel = {
    id: viewhotels.length + 1,
    name: req.body.name,
    price: req.body.price,
    img: req.body.image,
    address: req.body.address,
  };
  viewhotels.push(hotel);
  res.send("New Hotel Added Sucessfully:<br> " + req.body.name);
});

module.exports = router;
