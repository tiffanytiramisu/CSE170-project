exports.view = function(req, res){
  res.render('tutorial');
};

function dropDown(){
		$('.trigger.example .accordion')
        .accordion({
          selector: {
            trigger: '.title .icon'
          }  
         });
    }
