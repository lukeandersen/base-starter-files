//= require _console-fix.js
//= require _reactornav.js

/*
*	Site Name
*	Author: Author Name @ http://www.reactive.com
*   Copyright © 2012, http://www.reactive.com
*   All rights reserved.
*/
  
var REACTOR = REACTOR || {};

$(function(){
	REACTOR.modernizr();
	REACTOR.init();
	
});


REACTOR.modernizr = function() {
    //load scripts for <= IE8 - :nth-child
    Modernizr.load({
        test: Modernizr.borderradius,
        nope: ['/shared/js/libs/selectivizr-min.js']
    });
    Modernizr.load({
        test: Modernizr.input.placeholder,
        nope: ['/shared/js/libs/placeholder.min.js']
    });
};



REACTOR.init = function() {

    // how to run something only on  touch devices
    REACTOR.state = {};
    REACTOR.state.touch = $("html").hasClass("touch");

    // ipad specific detection
    if (navigator.userAgent.toLowerCase().indexOf('ipad') != -1) $('body').addClass('ipad');

    if (REACTOR.state.touch) {
    }

    // Acessible navigation
    $('.site-navigation').reactornav();


    // Add class to body for breakpoint size
    resized();
    function resized() {
        windowWidth = $(window).width();
        removeClasses = $('body').removeClass('mobile desktop tablet phablet');

        if(windowWidth < 550) {
            removeClasses;
            $('body').addClass('mobile');
        } else if(windowWidth < 767) {
            removeClasses;
            $('body').addClass('phablet');
        } else if(windowWidth < 1024) {
            removeClasses;
            $('body').addClass('tablet');
        } else {
            removeClasses;
            $('body').addClass('desktop');
        }
    }
    $(window).bind('resize', resized);
    

};


// Countdown timer
REACTOR.name = function() {
    var $name = $('.name');
    if (!$name.length) return;

};




