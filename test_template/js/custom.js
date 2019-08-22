/*
Copyright (c) 2017 Project Name
------------------------------------------------------------------
[Master Javascript]

Project: charity template

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var charity = {
		initialised: false,
		version: 1.0,
		charity: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- charity Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.Map_function();
			this.smooth_scroll();
			this.index_slider();
			this.responsive_menu();
			this.mail_function();
			this.countdown();
			this.magnific_popup();
			this.range_slider();
			this.wow();
		},
		
		/*-------------- charity Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
			Map_function: function () {
			   if($(".ch_map").length){
				  $( ".ch_map" ).each(function( index ) {
				  var id = $(this).attr("id");
				  var address = $(this).attr("data-address");
				  $(this).googleMap({
				   scrollwheel:true
				  });
				  $(this).addMarker({
					//coords: [22.9622672, 76.05079490000003] // for using lat long for marker
					address:address
				  });
				}); 
			   }
			  },
			smooth_scroll: function(){
				 jQuery.scrollSpeed(100, 800);
			},
			index_slider: function(){
				var revapi;
					jQuery(document).ready(function() {		
						revapi = jQuery("#rev_slider").revolution({
							sliderType:"standard",
							delay:9000,
							navigation: {
								arrows:{enable:true}				
							},			
							gridwidth:1230,
							gridheight:720		
						});		
					});	/*ready*/
			},
			responsive_menu:function(){
				$("#toggle").click(function() {
				  $(this).toggleClass("on");
				  $("#menu").slideToggle();
				});
			},
			mail_function: function(){
				$("#submit").click(function(){
					var firstname = $('#fname').val();
					var lastname = $('#lname').val();
					var address = $('#address').val();
					var phone = $('#phone').val();
					var email = $('#email').val();
					var letters = /^[A-Za-z]+$/;
					var number = /^[0-9]+$/;
					var mail_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					
					if (firstname != "" || address != "" || phone != "" || email != "" || lastname != "") {
						if(firstname.match(letters) || lastname.match(letters)) { 
							if(phone.match(number) && phone.length <= 10) {
								if(email.match(mail_letters)){
									$.ajax({
									method : 'post',
									url : 'ajax_mail.php',
									data :  {'first_name' : firstname ,
											  'last_name' : lastname,
											  'add' : address,
											  'phone_number' : phone,
											  'e_mail' : email,
											  },
								   }).done(function(resp){
									   console.log(resp);
									   if( resp == 1){
											document.getElementById("error").style.color = "green";
										   document.getElementById("error").innerHTML = "Mail Send Successfully";
											$('#fname').val('');
											$('#lname').val('');
										   $('#address').val('');
										   $('#phone').val('');
										   $('#email').val('');
									   }else{
											document.getElementById("error").style.color = "red";
										    document.getElementById("error").innerHTML = "Mail not Send";
									   } });
								}else{
									document.getElementById("error").style.color = "red";
									document.getElementById("error").innerHTML = "Please Fill The  Correct Mail Id";
								}
							}else{
								document.getElementById("error").style.color = "red";
								document.getElementById("error").innerHTML = "Please Fill The  Correct Number";
							}
						}else
						{	document.getElementById("error").style.color = "red";
							document.getElementById("error").innerHTML = "Please Fill The Correct Name";
						}   
					}else{
						document.getElementById("error").style.color = "red";
						document.getElementById("error").innerHTML = "Please Fill All Detail";
					}
				});
			},
			
			countdown: function(){
				$('.timer').appear(function() {
				 $(this).countTo();
				}); 
			},
			magnific_popup: function(){
				if($(".popup").length > 0){
					$(".popup").magnificPopup({
					  type: 'image',
					  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

					  zoom: {
						enabled: true, // By default it's false, so don't forget to enable it

						duration: 300, // duration of the effect, in milliseconds
						easing: 'ease-in-out', // CSS transition easing function
						opener: function(openerElement) {
						  return openerElement.is('a') ? openerElement : openerElement.find('img');
						}
					  },
					  gallery: {
						  enabled:true
						}

					});
				}
			},
			range_slider: function(){
				if($(".R").length){
					var RGBChange = function() {
						$('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')');
					};
					var r = $('.span2').slider().on('slide', RGBChange);
				}
			},
			wow: function(){
				 new WOW().init();
			},
	};
	
	$(document).ready(function() {
	 charity.init();
	 });
	 
	 $(window).load(function(){
		 $(".ch_loader").hide();
		 
		var h=($( window ).height());
		$(".ls_commingsoon_wrapper").css("height",h);
		$(".coming_soon").css("height",h);
	 });
	 $(window).scroll(function() {
		//After scrolling 100px from the top...
		if ( $(window).scrollTop() >= 50 ) {
			$('.ch_menu_wrapper').addClass("fixed_header");

		//Otherwise remove inline styles and thereby revert to original stying
		} 
		else{
			$('.ch_menu_wrapper').removeClass("fixed_header");
		}
	});

})(jQuery);