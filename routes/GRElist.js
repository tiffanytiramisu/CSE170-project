var GREJSON = require('../GRElist.json');
exports.view = function(req, res){
  res.render('GRElist',GREJSON);
};
