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

	// $('.header-page__toggler').on("click", function() {
    //     $('.header-page__nav').slideToggle(400, function() {
    //         if($(this).css('display') == 'block'){
    //     	    $('.header-page__nav').css('display', 'flex');
    //         } else if($(this).css('display') == 'none') {
    //         	$('.header-page__nav').removeAttr('style');
    //         }
    //     });
	// });
});