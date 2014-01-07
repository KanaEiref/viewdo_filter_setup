;(function() {

	"use strict";

	$(function(){
		$('#tiledMenu').data('size','big');
	});

    $(window).load(function(){
		$('#heroslider').flexslider({

			directionNav: false,
			slideshowSpeed: 4000,
			slideshow: true,
			animation: "slide",
			start: function(slider){
				$('body').removeClass('loading');
			}
			});
		$('#stepslider').flexslider({
			controlNav: false,
			startAt: 0,
			slideshow: false,
			reverse: false,
			animation: "slide",
			prevText: '',
			nextText: '',
			start: function(slider){
				$('body').removeClass('loading');
			}
			});
	});

	document.addEventListener("DOMContentLoaded", function(){
		// var iconsearch = document.getElementById('iconsearch');
		// iconsearch.addEventListener("click", clickSearchEvent, false);
	}, false);
})();
