/* DOCUMENT INFORMATION
 - Document: Theme_Name
 - Version:  1.0.0
 - Client:   Client_Name
 - Author:   Emin Azeroglu
 */

var filter_flag = 1;

$(window).resize(function() {
    var width = $(window).width();
    if(width > 1200) {   
        $(".menu-header .wrap").addClass("wrap-responsive");
    } else {
        $(".menu-header .wrap").removeClass("wrap-responsive");
    }
})

var widthBlock = $(window).width();
if(widthBlock > 1200) {
    $(".menu-header .wrap").addClass("wrap-responsive");
} else {
    $(".menu-header .wrap").removeClass("wrap-responsive");
}


$ ( function () {

    var flag = 0;

    var menu_bul = true;

    /* Only Number */
    $('body').on('input', '.only-number', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    /* Input Mask */
    $(document).ready(function () {
        $('[data-mask]').inputmask({'mask': '\\9\\94 99 999 99 99'});
    });

    $('.datepicker').datepicker({
        autoclose: true,
        format: 'dd-mm-yyyy'
    });

    $('.select2').select2();

    $('.scrollbar-macosx').scrollbar();

    var swiper_one = new Swiper('.slider-one', {
        speed: 400,
        spaceBetween: 100,
        autoHeight: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            preventClicksPropagation: true,
        },
    });
    
    var swiper_two = new Swiper('.slider-two', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination-product',
            clickable: true,
            preventClicksPropagation: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
    var swiper_trhee = new Swiper('.slider-product-img', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },
       pagination: {
            el: '.swiper-pagination-product-img',
            clickable: true,
            preventClicksPropagation: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

    var swiper_tree = new Swiper('.sliter-3', {
        slidesPerView: 7,
        
        slidesPerGroup: 1,
        loop: false,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                
            },
            768: {
                slidesPerView: 2,
                
            },
            640: {
                slidesPerView: 1,
                
            },
            320: {
                slidesPerView: 1,
               
            }
        }
    });
    /*
   if ($(window).width() <= '1200'){
         $('.collapse').removeClass('show');
        flag = 1;
    } else {
        $('.collapse').addClass('show');
        flag = 0;
    }*/
    function windowSize(){
        /*
        if ($(window).width() <= '1200'){
            $('.collapse').removeClass('show');
        }else {
            $('.collapse').addClass('show');
        }*/

        if ($(window).width() <= '1200'){
            $('#accordion').attr("data-default", '0');
        } else {
            $('#accordion').attr("data-default", '1');
        }

        if ($(window).width() > '994') {
            $('.menu').animate({ //выбираем класс menu и метод animate

                left: '-276px'

            }, 200); //скорость движения меню в мс
        }
    }

    $(window).on('load resize',windowSize);
    
    /*
    function windowSize(){
        if ($(window).width() <= '1200'){
            $('.collapse').collapse('hide');
            flag = 1;
        }else {
            $('.collapse').collapse('show');
            $('.menu-header').removeClass("active-block-menu");
            $('.sub_menu').removeClass("sub_menu_active");
        }
        if($(window).width() > '1200') {
            flag = 0;
        }
    }

    $(window).on('load resize',windowSize);

    $(".sub_link").click(function(){
        if(flag == 1){
            $(this).siblings(".sub_menu").toggleClass("sub_menu_active");
            $('.sub_content').height($('.sub_cols').outerHeight());
        } else false;
    });

    $(".sub_col").click(function(){
        if($(this).children('ul').hasClass("active-ul")) {
            $(this).children('ul').removeClass("active-ul");
            var menu_height = $('.menu-header').height() - $(this).children('ul').height();
            $('.menu-header').height(menu_height);
        } else {
            $(this).children('ul').addClass("active-ul");
            var menu_height = $('.menu-header').height() + $(this).children('ul').height();
            $('.menu-header').height(menu_height);
        }
    });
    $(".menu-categori").click(function(){
        $('.menu-header').toggleClass("active-block-menu");
    });
    $(".close-menu").click(function(){
        $(".menu-header").removeAttr("style");
        $('.sub_menu').removeClass("sub_menu_active");
        $(".sub_col ul").removeClass("active-ul");
    });*/
    
    $(".search-icon").click(function(){
        $('.search-block-icon').toggleClass('search-block-show');
    });

    $( ".product-icon-heart" ).on( "click", function() {
        var btn = $(this);
        btn.toggleClass("active");
    });
    
    function height_match(target){
        var big_height = 0;

        $(target).each(function(){
            if(big_height < $(this).height()){
                big_height = $(this).height();
            }
        })      

        $(target).css('min-height', big_height);
    }

    height_match('.product-model');

    jQuery('.prev').on('click', function (e) {
		e.stopImmediatePropagation();
		var btn_group_parent = $(this).closest('.btn-group');
		var number = 0;
		var show_number = btn_group_parent.find('.show-number');
		var a = show_number.text();
		a = parseInt(a);
		if (a > 1) {
			number = a - 1;
		} else {
			number = 1;
		}
		show_number.text(number);

	});

	jQuery('.next').on('click', function (e) {
		e.stopImmediatePropagation();
		var btn_group_parent = $(this).closest('.btn-group');
		var number = 0;
		var show_number = btn_group_parent.find('.show-number');
		var a = show_number.text();
		a = parseInt(a);
		if (a > 0) {
			number = a + 1;
		}
		show_number.text(number);
	});

    $(".menu-icon").click(function(){
        $('.menu').animate({ //выбираем класс menu и метод animate

            left: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */

        }, 200); //скорость движения меню в мс
    });

    $(".close").click(function(){
        $('.menu').animate({ //выбираем класс menu и метод animate

            left: '-276px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */

        }, 200); //скорость движения меню в мс
    });

    $('.anchor').click(function(){

        //Сохраняем значение атрибута href в переменной:

        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1800);
        return false;

    });

});