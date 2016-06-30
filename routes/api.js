var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

router.get('/', function(req, res, next) {
  knex('podcasts').orderBy('date', 'desc').limit(1).then(function(podcasts){
        res.json(podcasts)
  })
})
router.get('/more/:date', function(req,res,next){
  knex('podcasts').where('date', '<', req.params.date).orderBy('date', 'desc').limit(1).then(function(podcasts){
    res.json(podcasts)
  })
})
router.post('/', function(req, res, next) {
  return knex('podcasts').insert({title: req.body.title, description: req.body.description, date: req.body.date, link: req.body.link, image_url:req.body.image_url})
    .then(function(podcast){
      res.json(podcast)
    })
  })



module.exports = router;
