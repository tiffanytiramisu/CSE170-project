var SAT = require('../SATlist.json');
var GRE = require('../GRElist.json');
var ELTS = require('../ELTSlist.json');
var TOEFL = require('../TOEFLlist.json');

exports.listInfo = function(req, res) { 
	var listID = req.params.id;
	if (listID == "SAT") {
		listID = SAT;
	} 
	else if (listID == "GRE") {
		listID = GRE;
	} 
	else if (listID == "ELTS") {
		listID = ELTS;
	} 
	else if (listID == "TOEFL") {
		listID = TOEFL;
	} 
  	res.json(listID);
	
}