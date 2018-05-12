var express = require('express');
var router = express.Router();
//main routing file

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//Committing
module.exports = router;
