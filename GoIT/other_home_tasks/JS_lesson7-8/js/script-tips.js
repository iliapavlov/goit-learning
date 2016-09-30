$(function() {

	var $inputs = $('fieldset>div>input');
	
	
	var $tipElem = $( '<div/>', {
		class : 'tips'
	});

	var TIPS = [
	'Please privide your firstname.',
	'Please provide also your lastname.',
	'Your home or work address.'
	];

	$inputs.hover( function() {

		var selector = $(this).parent();

		var index = $(selector).index();

		$tipElem.text(TIPS[index]);


		$tipElem.appendTo(selector);
		$tipElem.css({'opacity' : '0'});
		$tipElem.animate({'opacity' : '1'}, 450);
		
	}, function() {
		$tipElem.animate({'opacity' : '0'}, 250);
		$tipElem.remove();
	});	


});