// Calling plugins
$(function() {
    $('.jcarousel').jcarousel() //jcarousel 
    .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });


    $('.jcarousel-prev').jcarouselControl({ //jcarousel's controls
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


    $('.customSelect').customSelect(); //custom select


   $('.custom_check-withjquery input')
   .iCheck({checkboxClass: 'icheckbox_minimal-blue'}); //custom check box

});


//Dropdown menu function
$(function() {

	$('.dropdown').hover(
		function() {
		$(this).children('.sub-menu').slideDown(350);
		}, function() {
			$(this).children('.sub-menu').slideUp(350);
		}
	);

	$('.menu-item').mouseenter(
		function() {
			$(this).animate({
				backgroundColor:"#FFA079",
				borderBottomColor:"#517CCC",
			    borderLeftColor:"#517CCC",
			    borderRightColor:"#517CCC",
			    borderTopColor:"#517CCC",
			}, 100);
		}
	);

	$('.menu-item').mouseleave(
		function() {
			$(this).animate({
				backgroundColor:'#CC6756',
				borderBottomColor:"#CC6756",
			    borderLeftColor:"#CC6756",
			    borderRightColor:"#CC6756",
			    borderTopColor:"#CC6756",
			}, 100);
		}
	);

});