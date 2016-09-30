(function($) {

    $.fn.simpleCarousel = function (options) {
        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');

        var defaults = {
            autoScroll: false,
            interval: 3000,
            freq: 500
        }

        var settings = $.extend(defaults, options);
     
        var elementsCount = elementsList.find('li').length;
        var pixelsOffset = 225;
        var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
        var maximumOffset = 0;
        var currentLeftValue = 0;

        var timer;

        function scrollCarousel() {
            timer = setInterval(function(){           
                elementsList.animate({ left : currentLeftValue + "px"}, settings.freq);

                currentLeftValue -= pixelsOffset;
                if (currentLeftValue < minimumOffset) {
                    currentLeftValue = 0;
                }

            } , settings.interval);

        }

        if (settings.autoScroll) {
        scrollCarousel();
        };

     
        leftUIEl.click(function() {        
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, settings.freq);
            }        
        });
     
        rightUIEl.click(function() {        
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, settings.freq);
            }        
        });

        return this;

    }

})(jQuery);