var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('pirates').then(function(pirates){
        res.json(pirates)
  })
router.post('/', function(req, res, next) {
  return knex('pirates').insert({name: req.body.name, poison: req.body.poison, accessory: req.body.accessory, image_url:            req.body.image_url})
    .then(function(pirate){
      res.json(pirate)
    })
  })
});

module.exports = router;
