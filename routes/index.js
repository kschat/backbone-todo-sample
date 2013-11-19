var fs = require('fs');

exports.init = function init(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});
};