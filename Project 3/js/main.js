$(document).ready(function() {
	$("body").removeClass("load");

	$('.service-item__button').hover(function(){
		var parent = $(this).parent();

		parent.addClass('service-item__hovered');

		parent.children('.service-item__img').attr('src', 'img/service-2.png');
	}, function(){
		var parent = $(this).parent();
		parent.removeClass('service-item__hovered');
		parent.children('.service-item__img').attr('src', 'img/service-1.png');
	});

	$('.price-item__button').hover(function(){
		$(this).parent().addClass('price-item__hovered');
	}, function(){
		$(this).parent().removeClass('price-item__hovered');
	});

	$('.scroll').click( function() {
		var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
		}
		
	    return false;
	});

	$('.header-top__toggler').on("click", function() {
        $('.header-top__nav').slideToggle(400, function() {
            if($(this).css('display') == 'block'){
        	    $('.header-top__nav').css('display', 'flex');
            } else if($(this).css('display') == 'none') {
            	$('.header-top__nav').removeAttr('style');
            }
        });
	});
});