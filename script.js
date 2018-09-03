$('.event-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

$(document).ready(function () {


    $('.search-card').mouseover(function () {
        if(window.innerWidth>768){
            $(this).find('.place').css('display','none');
            $(this).find('.start').css('display','none');
            $(this).find('.buttons').css('display','flex');
        }

    });

    $('.search-card').mouseleave(function () {

        $(this).find('.place').css('display','flex');
        $(this).find('.start').css('display','flex');
        $(this).find('.buttons').css('display','');
    });

    $(window).scroll(function () {
        if($(window).scrollTop()>50) {

            $('.row.head').css('width','100%');


            $('.row.head').find('.menu-wrap').css({
                'position':'fixed',
                'width':'100%',
                'max-width':'1920px',
                'background':'rgba(0,0,0,0.8)',
                'z-index':10
            });
            $('.row.head').find('.col').css({
                'max-width':'1400px',
                'margin':'0 auto'
            });
            $('header .row.title').css('margin-top','180px');


        }
        if($(window).scrollTop()<50) {

            $('.row.head').css('width','');


            $('.row.head').find('.menu-wrap').css({
                'max-width':'1400px',
                'position':'',
                'width':'',
                'background':''
            });
            $('.row.head').find('.col').css({
                'max-width':'',
                'margin':''
            });
            $('header .row.title').css('margin-top','');
        }
    });


    $('.card-item .carousel-item').css('height',$('.card-item .carousel-item').innerWidth()/0.6965);

    if(window.innerWidth<1270 && !$('header .menu-wrap .left').hasClass('logo-active')){
        $('header .menu-wrap .right .top').prepend( $('header .menu-wrap .left'));
        $('header .menu-wrap .left').addClass('logo-active');
    }



    $(window).resize(function () {
        $('.card-item .carousel-item').css('height',$('.card-item .carousel-item').innerWidth()/0.6965);


        // console.log($(window).innerWidth());
        // console.log($(window).outerWidth());
        // console.log(window.innerWidth);



        if(window.innerWidth<1270 && !$('header .menu-wrap .left').hasClass('logo-active')){
           $('header .menu-wrap .right .top').prepend( $('header .menu-wrap .left'));
            $('header .menu-wrap .left').addClass('logo-active');
        }

        if(window.innerWidth>1269 && $('header .menu-wrap .left').hasClass('logo-active')){
            $('header .menu-wrap .col').prepend( $('header .menu-wrap .left'));
            $('header .menu-wrap .left').removeClass('logo-active');
        }

    });

    $('.burger').click(function () {
        if(!$('.menu-wrap .menu ul').hasClass('active'))
        $('.menu-wrap .menu ul').addClass('active');
        else $('.menu-wrap .menu ul').removeClass('active');
    })

    
    
    /* test1 */
});



