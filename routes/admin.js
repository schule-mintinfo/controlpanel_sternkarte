var express = require('express');
var snekfetch = require('snekfetch')
var router = express.Router();
const codes = require("../codelist");

router.get('/', function (req, res) {
  if (req.query.code) {
    if (codes[req.query.code]) {
      let answer = snekfetch.get("localhost:3001" + codes[req.query.code])
      return res.render('admin', {active: 'admin', color: answer.color, action: answer.message});
    } else {
      return res.render('admin', {active: 'admin', action: "wc"});
    }
  }
  res.render('admin', {active: 'admin'});
});

module.exports = router;
