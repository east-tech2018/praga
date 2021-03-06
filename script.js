// $('.event-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1
// });

$('.event-slider').slick({

    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
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

    ////////HEADER///////

    var lastScrollTop = 0;
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if(st == 0) {
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

       else if (st > lastScrollTop){
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

        } else {
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
        lastScrollTop = st;
    });


    $(window).scroll(function () {
        if($(window).scrollTop()>50) {




        }
        if($(window).scrollTop()<50) {


        }
    });

    ////////HEADER///////



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


    /////////// INPUT ////////////


    $('.number').find('span').click(function () {
        if($(this).hasClass('arrow-left')) {
            val = $(this).parent().find('input').val();
             if(val>0){
                 $(this).parent().find('input').val(parseInt(val)-1);
             }
        }
        if($(this).hasClass('arrow-right')) {
            val = $(this).parent().find('input').val();
                $(this).parent().find('input').val(parseInt(val)+1);
        }
    });

    
    /* test1 */
});



