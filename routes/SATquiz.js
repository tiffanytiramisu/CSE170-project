var SATJSON = require('../SATlist.json');
exports.view = function(req, res){
  res.render('SATquiz',SATJSON);
};
