var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/getTest", (req, res, next) => {
	res.status(200).send("hello world");
});

module.exports = router;
