(function(){
	'use strict';
	var mod = $('#mod-banner');
	function makeSlide(){
		mod.find('.slide').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			dots: false,
			onBeforeChange:function(event, slick, currentSlide, nextSlide){
				console.log(nextSlide);
			}
		});
	}

	$(document).ready(function() {
		makeSlide();
	});
})();