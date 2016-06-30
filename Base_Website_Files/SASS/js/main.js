
//load scripts for <= IE8 - :nth-child
Modernizr.load({
    test: Modernizr.borderradius,
    nope: ['js/libs/selectivizr-min.js']
});
Modernizr.load({
    test: Modernizr.input.placeholder,
    nope: ['js/libs/placeholder.min.js']
});


// as the page loads, call these scripts
$(document).ready(function() {
	
	// jQuery functions go here...

    
}); /* end of as page load scripts */
