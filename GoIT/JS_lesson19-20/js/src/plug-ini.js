$(function(){
	$('.jcarousel').jcarousel({ 
		wrap: 'last'
    });

    $('.jcarousel-pagination')

		.on('jcarouselpagination:active', 'a', function() {
		    $(this).addClass('active');
		})
		.on('jcarouselpagination:inactive', 'a', function() {
		    $(this).removeClass('active');
		})

	.jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '"></a>';
        }
    });

    $('.jcarousel').jcarouselAutoscroll({
        interval: 10000,
        target: '+=1',
        autostart: true
    });

    $('#accordion').accordion({

    });
});