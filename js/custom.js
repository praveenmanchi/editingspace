(function ($) {

	new WOW().init();

	jQuery(window).load(function () {
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function () {
		$('.navbar-nav li a').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
})(jQuery);
