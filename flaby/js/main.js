$(document).ready(function() {
	var scroll = $(window).scrollTop();
	
	if (scroll >= 10) {
		$(".header-top").addClass("header-top__scrolled");
	} else {
		$(".header-top").removeClass("header-top__scrolled");
	}

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		if (scroll >= 10) {
		  $(".header-top").addClass("header-top__scrolled");
		} else {
		  $(".header-top").removeClass("header-top__scrolled");
		}
	});

	$('.scroll').click( function() {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
		}
		
		return false;
	});

	$('.header-top__toggle-on').on("click", function() {
		$('.header-menu').slideToggle(300, function() {
			if(!$('body').hasClass('body__no-scroll')) {
				$('body').addClass('body__no-scroll');

				$('.header-top__nav').css('display', 'block');
				$('.header-menu').css('display', 'flex');
				$('.header-top__toggle-off').css('display', 'block');
			}
		});
	});

	$('.header-top__toggle-off').on("click", function() {
		$('.header-menu').slideToggle(300, function() {
			if($('body').hasClass('body__no-scroll')) {
				$('body').removeClass('body__no-scroll');

				$('.header-menu').css('display', 'none');
				$('.header-top__toggle-off').css('display', 'none');
			}
		});
	});
});