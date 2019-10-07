(function($) {


	// change behaviour of anchor links to scroll instead of jump
	$(document).on('click touchend', 'a[href^=#]', function(e) {
		var id = $(this).attr('href'),
			$elem = $(id);
		if ($elem.length > 0) {
			e.preventDefault();
			if (Modernizr.touch && myScroll) {
				// mobile
				myScroll.scrollTo(0, -$elem.offset().top - myScroll.y, 1000, IScroll.utils.ease.quadratic);
				// TweenMax.to(myScroll, 1, {y: -$elem.offset().top-$(".scrollContent").offset().top});
			} else {
				TweenMax.to(window, 1, { scrollTo: { y: $elem.offset().top } });
				if (window.history && window.history.pushState) {
					// if supported by the browser we can even update the URL.
					history.pushState('', document.title, id);
				}
			}
		}
	});


})(jQuery);
