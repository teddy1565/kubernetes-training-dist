var express = require('express');
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test", (req, res, next) => {
	axios.get("http://localhost:3001/getTest").then(({data}) => {
		res.status(200).send(data);
	}).catch((error) => {
		res.status(404).send("fail");
	});
});

module.exports = router;
