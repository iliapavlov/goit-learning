
$(function () {

	var $tabButtons = $('.tbn'); // get collection
    var $tabContainers = $('.tabs-content');

    $tabButtons.first().addClass('active'); // first li class
    $tabContainers.first().show(); 

    $tabButtons.on('click', switchTab);

    function switchTab(e) {
        var index = $(this).index();

        $tabContainers.hide(); // hide all
        $tabContainers.eq(index).show(); // show indexed
        
        $tabButtons.removeClass('active'); // li change classes
        $(this).addClass('active');

    }

});