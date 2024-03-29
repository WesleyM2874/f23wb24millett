var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let results = [
    { donutType: 'Glazed', numberOfDonuts: 2, xPrice: 4.0 },
    { donutType: 'Frosted', numberOfDonuts: 5, xPrice: 7.0 },
    { donutType: 'Cream', numberOfDonuts: 1, xPrice: 1.0 }
  ];

  res.render('donuts', { title: 'Search Results: Donuts', results: results });
});

module.exports = router;
