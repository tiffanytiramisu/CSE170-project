
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var SATlist = require('./routes/SATlist');
var SATquiz = require('./routes/SATquiz');
var study = require('./routes/study');
var manage = require('./routes/manage');
var tutorial = require('./routes/tutorial');
var reminder = require('./routes/reminder');
var lists = require('./routes/lists');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/SATlist', SATlist.view);
app.get('/SATquiz',SATquiz.view);
app.get('/study',study.view);
app.get('/manage',manage.view);
app.get('/tutorial',tutorial.view);
app.get('/reminder',reminder.view);
app.get('/lists/:id',lists.listInfo);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
