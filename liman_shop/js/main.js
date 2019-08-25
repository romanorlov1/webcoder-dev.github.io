$(document).ready(function() {
	$('.header-page__toggler-on').on("click", function() {
		$('.header-menu').slideToggle(300, function() {
			if(!$('body').hasClass('body__no-scroll')) {
				$('body').addClass('body__no-scroll');

				$('.header-page__nav').css('display', 'block');
				$('.header-menu').css('display', 'flex');
				$('.header-page__toggler-off').css('display', 'block');
			}
		});
	});

	$('.header-page__toggler-off').on("click", function() {
		$('.header-menu').slideToggle(300, function() {
			if($('body').hasClass('body__no-scroll')) {
				$('body').removeClass('body__no-scroll');

				$('.header-menu').css('display', 'none');
				$('.header-page__toggler-off').css('display', 'none');
			}
		});
	});

	$('.header-menu__link').on("click", function() {
		if($('body').hasClass('body__no-scroll')) {
			$('.header-menu').slideToggle(300, function() {
				$('body').removeClass('body__no-scroll');

				$('.header-menu').css('display', 'none');
				$('.header-page__toggler-off').css('display', 'none');
			});
		}
	});
});