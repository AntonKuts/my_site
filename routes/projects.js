var express = require('express');
var router = express.Router();
// g = navigator.userAgent;
router.get('/', function(req, res) {
  console.log(req.headers['user-agent']);
  let user = req.headers['user-agent'];
  res.render('projects', { user: user });
});

module.exports = router;
