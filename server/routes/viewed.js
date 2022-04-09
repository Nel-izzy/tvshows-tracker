const express = require("express");
const router = express.Router();

const { Viewed } = require("../models/Viewed");

const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================

router.post("/viewedNumber", (req, res) => {
  Viewed.find({ movieId: req.body.movieId }).exec((err, subscribe) => {
    if (err) return res.status(400).send(err);

    res.status(200).json({ success: true, subscribeNumber: subscribe.length });
  });
});

router.post("/viewed", (req, res) => {
  Viewed.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, subscribe) => {
    if (err) return res.status(400).send(err);

    let result = false;
    if (subscribe.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, subcribed: result });
  });
});

router.post("/addToViewed", (req, res) => {
  console.log(req.body);

  const viewed = new Viewed(req.body);

  viewed.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/removeFromViewed", (req, res) => {
  Viewed.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

router.post("/getViewedMovie", (req, res) => {
  //Need to find all of the Users that I am subscribing to From Subscriber Collection
  Viewed.find({ userFrom: req.body.userFrom }).exec((err, views) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, views });
  });
});

module.exports = router;
