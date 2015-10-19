var express = require('express');
var router = express.Router();

/* GET app page. */
router.get('/', function(req, res, next) {
  res.render('appboard/main', { title: 'Your app', user: user });
});

module.exports = router;
