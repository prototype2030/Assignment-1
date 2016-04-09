var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

var FertilityRate = mongoose.model('FertilityRate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*  GET Fertility Rates */
router.get('/fertility-rates', function(req, res, next) {
  FertilityRate.find(function(err, data){
    if(err){ return next(err); }
    
    res.json(data);
  });
});

module.exports = router;
