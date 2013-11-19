var express = require('express'),
        routes = require('./routes'),
        http = require('http'),
        path = require('path'),
        fs = require('fs');

var app = express(),
        routeDir = 'routes',
        routeFiles = fs.readdirSync(routeDir);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Gets the path for each file in the routes directory and initiates them
routeFiles.forEach(function(file) {
        var filePath = path.resolve('./', routeDir, file),
        route = require(filePath);

        route.init(app);
});

http.createServer(app).listen(app.get('port'), function(){
        console.log(app.get('env'));
          console.log('Express server listening on port ' + app.get('port'));
});