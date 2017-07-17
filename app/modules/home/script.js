(function(){
	'use strict';
	  var men = jQuery('#formen');
	  var women= jQuery('#forwomen');
		function menslide(){
		 var slm	= men.slick({
				slidesToShow:2,
				slidesToScroll:2,
				autoplay: true,
  				autoplaySpeed: 1500,
  				arrows:false,
  				appendArrows: $('#arrowsmen'),
			});

			jQuery("#arrowsmen .next").on('click',function(){
				slm.slickNext();
			});
			jQuery("#arrowsmen .prev").on('click',function(){
				slm.slickPrev();
			});
		}
		function womenslide(){
		var slwm= 	women.slick({
				slidesToShow:2,
				slidesToScroll:2,
				autoplay: true,
  				autoplaySpeed: 1500,
  				arrows:false,
			});
		jQuery("#arrowswomen .next").on('click',function(){
				slwm.slickNext();
			});
			jQuery("#arrowswomen .prev").on('click',function(){
				slwm.slickPrev();
			});
		}
		$(document).ready(function(){
			menslide();
			womenslide();
			console.log("formen");
		});
})();