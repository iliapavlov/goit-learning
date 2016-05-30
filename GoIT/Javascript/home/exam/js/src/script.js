

$(function(){
	// ========initialize plugins===============
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

    $('.jcarousel').jcarouselAutoscroll({
        interval: 12000,
        target: '+=1',
        autostart: true
    });

	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: 200
	});

// ==========AJAX======================================

	var apiKey = '2629896-3f8b8ff907a38314ad4775ec6';
	function MasonryCallback(data) {
		var templateResults = $('#pixplorer').html();
		var content = tmpl(templateResults, {data: data.hits});
		$('#grid').remove();
		$('#gridWrapper').append(content);
		$('.grid-item:nth-child(5)').addClass('grid-item--width2');
		$('.grid-item:nth-child(6)').addClass('grid-item--width2');
	}

	$.get("https://pixabay.com/api/?key=" + apiKey + "&q=&min_width=300&min_height=120&per_page=7&safesearch=true&image_type=photo", MasonryCallback);


	$('#imagesRequest').on('submit', function(e) {
		e.preventDefault();
		var text = $('#request').val();

		$.get("https://pixabay.com/api/?key=" + apiKey + "&q=" + text + "&min_width=300&min_height=120&per_page=7&safesearch=true&image_type=photo", MasonryCallback);
	});


})