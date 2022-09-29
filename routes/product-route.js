const express = require("express");
const router = express.Router();

const viewhotels = require("../data/product-list");

router.get("/viewhotels", (req, res) => {
  res.render("trending", {
    hotels: viewhotels,
  });
});

router.get("/product/:productId", (req, res) => {
  //   res.send("selected product is " + req.params.productId);
  // res.json(trendingShirts[req.params.productId - 1]);
  res.render("product-detail", {
    hotel: viewhotels[req.params.productId - 1],
  });
});

module.exports = router;
