var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// router.get('/', function (req, res) {
//   res.send('<html><body><h1>Hello Henry 2014 ;-)</h1></body></html>');
// });


module.exports = router;
