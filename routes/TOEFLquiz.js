var TOEFLJSON = require('../TOEFLlist.json');
exports.view = function(req, res){
  res.render('TOEFLquiz',TOEFLJSON);
};
