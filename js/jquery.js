$(document).ready(function(){
	
	$('.slider').slick({
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 2000,
		slidesToShow: 2,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  responsive: [{
	  	breakpoint: 769,
	  	settings: {
  			slidesToShow: 1
	  	},
	  }]
	});


	$(".callme").click(function() {
    
    $("#call-modal").modal('show');

  });

  $(".passportme").click(function() {
    
    $("#pasport-modal").modal('show');

  });

  $(".vizame, .link-modal").click(function() {
    
    $("#viza-modal").modal('show');

  });

  /*forma*/
  $('form').submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Спасибо!");
            setTimeout(function(){
                $('form').trigger('reset');        
            }, 1000);
        });
        return false;
    });
	
  	var h_hght = 127; // высота шапки
		var h_mrg = 0;    // отступ когда шапка уже не видна
		                 
		$(function(){
		 
		    var elem = $('.header-nav');
		    var top = $(this).scrollTop();
		     
		    if(top > h_hght){
		        elem.css('top', h_mrg);
		    }           
		     
		    $(window).scroll(function(){
		        top = $(this).scrollTop();
		         
		        if (top+h_mrg < h_hght) {
		            elem.css('top', (h_hght-top));
		        } else {
		            elem.css('top', h_mrg);
		        }
		    });
		 
		});


		 $(".navigation").on("click","a", function (event) {

         event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

    });

	 	new WOW().init();

	 	// $(window).scroll(function(){

	 	// 	var st = $(this).scrollTop();
	 		
	 	// 	$('.parallax').css({
 		// 		"transform" : "translate(0%, " + st /35 + "%"
	 	// 	});	

	 	// });


	 	/* menu */

	 	 function menu() {

        var trig = $('.trigger-js'),
            menu = $('.menu-js');

        trig.click(function() {
            $(this).next(menu).slideToggle();
        });

        $(window).resize(function() {

            if ($(window).width() > 732) {
                menu.removeAttr('style');
            }
        });
    }
    menu();
	
	$('.menu-js li a').click(function(){
		if ($(window).width() < 732) {
            $('.menu-js').hide();
        }else{
			$('.menu-js').show();
		}
	});

});
