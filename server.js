// Require our dependencies
var express = require('express'),
	http = require('http'),
	routes = require('./routes');
	
var browserify = require("browserify-middleware");
browserify.settings({
	transform: ["reactify"],
	development: {
		gzip: true,
		minify: true,
		precompile: true,
		cache: true
	}
});

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;
var ip = process.env.IP || "0.0.0.0";

// Set jade as the templating engine
app.set('view engine', 'jade');

// Disable etag headers on responses
app.disable('etag');

// browserify
var shared = ["react", "react-dom", "underscore"];
app.get("/js/vendor.js", browserify(shared))
app.use("/js", browserify("./components", {external: shared}));

// Index Route
app.get('/', routes);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Fire it up (start our server)
var server = http.createServer(app).listen(port, ip, function () {
	console.log('Express server listening on port ' + port);
});