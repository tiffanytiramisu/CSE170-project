var ELTSJSON = require('../ELTSlist.json');
exports.view = function(req, res){
  res.render('ELTSquiz',ELTSJSON);
};
