var express = require('express');
var snekfetch = require('snekfetch')
var router = express.Router();
const codes = require("../codelist");

router.get('/', async function (req, res) {
  if (req.query.code) {
    if (codes.api[req.query.code]) {
      let answer = await snekfetch.get("http://localhost:5000" + codes.api[req.query.code]);
      return res.render('admin', {active: 'admin', color: answer.body.color, action: answer.body.Nachricht});
    } else if(codes.web[req.query.code]) {
      return res.redirect(codes.web[req.query.code]);
    } else {
      return res.render('admin', {active: 'admin', action: "wc"});
    }
  }
  res.render('admin', {active: 'admin'});
});

module.exports = router;
