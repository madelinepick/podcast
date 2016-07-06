var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

router.get('/', function(req, res, next) {
  knex('podcasts').orderBy('date', 'desc').limit(2).then(function(podcasts){
        res.json(podcasts)
  })
})
router.post('/', function(req, res, next) {
  return knex('podcasts').insert({title: req.body.title, description: req.body.description, date: req.body.date, link: req.body.link, image_url:req.body.image_url})
    .then(function(podcast){
      res.json(podcast)
    })
  })
router.get('/list', function(req,res,next){
    return knex('podcasts').orderBy('date', 'desc').then(function(podcasts){
          res.json(podcasts)
    })
  })
router.post('/delete', function(req,res,next){
    return knex('podcasts').where('id', req.params.id).del().then(function(podcast){
        res.json(podcast)
    })
  })
router.get('/:id', function(req, res, next) {
  return knex('podcasts').where('id', req.params.id).first().then(function(podcast){
    res.json(podcast)
  })
})
router.get('/more/:date', function(req,res,next){
  knex('podcasts').where('date', '<', req.params.date).orderBy('date', 'desc').limit(2).then(function(podcasts){
    res.json(podcasts)
  })
})



module.exports = router;
