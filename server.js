var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./api/routes');
var config = require('./config');

var app = express();

config.init();

if (process.env.npm_lifecycle_event == 'server:dev') {
    app.use(require('./api/middlewares/webpack-hot'));
}

app.use(express.static('app'));
app.use(bodyParser.json());

routes.init(app);

app.listen(process.env.PORT, function () {
    console.log('App listening on port ' + process.env.PORT + '.');
});
