var app = require('./index');
var db = app.get('db');

module.exports = {
  getPlanes: function(req, res, next){
    db.get_planes([25], function(err, planes){
      console.log(err, planes);
    });
  },
  newPlanes: function(){
    db.new_plane(function(err, planes){
      console.log(err, "plane added")
    });
  }
}
