var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://MichaelDavis@localhost/mini_sql_node_massive";

var app = module.exports = express();

var massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db', massiveInstance);

app.use(bodyParser.json());
app.use(cors());

var controller = require('./controller.js')

app.get('/planes', controller.getPlanes)
 controller.getPlanes();
// controller.newPlanes();

//var db = app.get('db');

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
