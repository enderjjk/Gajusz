$(function(){
	$(document).on('click', '#mobile-menu-icon', function(e){
		$('#mobile-menu').toggle();
		e.preventDefault();
	});

	$("#my-gallery").justifiedGallery({
		rowHeight : 200, 
		rel : 'gallery2',
		margins : 1
	}).on('jg.complete', function () {
		$('#my-gallery a').swipebox();
	});
	
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();
	
	$(window).scroll(function(event){
		didScroll = true;
	});
	
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);
	
	function hasScrolled() {
		var st = $(this).scrollTop();
		
		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta) return;
		
		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('header').addClass('visible');
		} else {
			// Scroll Up
			if(st < 100) {
				$('header').removeClass('visible');
			}
		}
		
		lastScrollTop = st;
	}	
});