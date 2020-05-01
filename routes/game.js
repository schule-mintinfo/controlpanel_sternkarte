var express = require('express');
var router = express.Router();

/* GET pong. */
router.get('/pong', function (req, res) {
  res.render('pong', {active: 'admin'});
});

router.get('/2048', function (req, res) {
  res.render('2048', {active: 'admin'})
})

module.exports = router;
