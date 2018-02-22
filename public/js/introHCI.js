'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".title").click(function(e){
		$('this').accordion({
          selector: {
            trigger: '.title .icon'
          }  
         });
})

	// add any functionality and listeners you want here
}