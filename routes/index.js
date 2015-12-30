var express = require('express');
var app = express();
var router = express.Router();

var constant = require("../constant");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { 
        title: constant().title,
        curPath: req.url
    });
});

// router.get('/users/:action', users);

module.exports = router;