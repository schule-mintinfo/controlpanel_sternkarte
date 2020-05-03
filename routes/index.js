var express = require('express');
var snekfetch = require('snekfetch')
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res) {
  if(req.query.date) {
    let answer = await snekfetch.get("http://localhost:5000/date/" + req.query.date);
    return res.render('index', {active: 'index', color: answer.body.color, action: answer.body.Nachricht});
  } else {
    res.render('index', {active: 'index'});
  }
});

module.exports = router;
