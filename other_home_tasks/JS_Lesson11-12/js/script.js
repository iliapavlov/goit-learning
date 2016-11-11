$(function(){
    $('carousel-hider').simpleCarousel({
        autoScroll: true,
        // freq : 400,
        // interval: 1500
    });

//-------templating------------------------
    var profile = $('#profile').html();

    var data = {
        name: 'Павлов Илья Александрович',
        userpicUrl: '"img/user1.jpg"',
        job: 'Фронтендер',
        tel: '+380987654321',
        features: ['Учит JS', 'Слушается учителей', 'Сдал урок по шаблонизации']
    };

    var content = tmpl(profile, data);

    $('#second_section').append(content);
})