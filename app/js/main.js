$(function () {
    //Табы
    $('.contacts-tabs__link').on('click', function (e) {
        e.preventDefault();
        $('.contacts-tabs__link').removeClass('contacts-tabs__link--active');
        $(this).addClass('contacts-tabs__link--active');

        $('.contacts-tabs__content').removeClass('contacts-tabs__content--active');
        $($(this).attr('href')).addClass('contacts-tabs__content--active');
    });

    $('.contacts-tabs__link').on('click', function () {
        $('.contacts__content').addClass('contacts__content--active');
        $(".contacts-tabs__slider").slick('slickSetOption', 'adaptiveHeight', true, true);
    })

    $('.content__link').on('click', function (e) {
        e.preventDefault();
        $('.content__link').removeClass('content__link--active');
        $(this).addClass('content__link--active');

        $('.content__content').removeClass('content__content--active');
        $($(this).attr('href')).addClass('content__content--active');
    });

    $('.doctor-biography__link').on('click', function (e) {
        e.preventDefault();
        $('.doctor-biography__link').removeClass('doctor-biography__link--active');
        $(this).addClass('doctor-biography__link--active');

        $('.doctor-biography__content').removeClass('doctor-biography__content--active');
        $($(this).attr('href')).addClass('doctor-biography__content--active');
    });

    $('.header__items').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button class="header__arrow header__arrow--prev"><svg class="header__icon"><use xlink:href="../img/sprite.svg#arrow-left-icon"></use></svg></button>',
        nextArrow: '<button class="header__arrow header__arrow--next"><svg class="header__icon"><use xlink:href="../img/sprite.svg#arrow-right-icon"></use></svg></button>',
        slidesToScroll: 2,
        infinite: false,
        slidesToShow: 2,
    });

    $('.main-slider__items').slick({
        arrows: true,
        dots: true,
        prevArrow: '<button class="main-slider__arrow main-slider__arrow--prev"><svg class="main-slider__icon"><use xlink:href="../img/sprite.svg#arrow-left-icon"></use></svg></button>',
        nextArrow: '<button class="main-slider__arrow main-slider__arrow--next"><svg class="main-slider__icon"><use xlink:href="../img/sprite.svg#arrow-right-icon"></use></svg></button>',
        infinite: false,
    })

    $('.contacts-tabs__slider').slick({
        arrows: true,
        dots: true,
        prevArrow: '<button class="contacts-tabs__arrow contacts-tabs__arrow--prev"><svg class="contacts-tabs__icon"><use xlink:href="../img/sprite.svg#arrow-left-icon"></use></svg></button>',
        nextArrow: '<button class="contacts-tabs__arrow contacts-tabs__arrow--next"><svg class="contacts-tabs__icon"><use xlink:href="../img/sprite.svg#arrow-right-icon"></use></svg></button>',
        infinite: false,
        autoplay: false,
    })

    $('.awards__items').slick({
        arrows: true,
        dots: true,
        prevArrow: '<button class="awards__arrow awards__arrow--prev"><svg class="awards__icon"><use xlink:href="../img/sprite.svg#arrow-left-icon"></use></svg></button>',
        nextArrow: '<button class="awards__arrow awards__arrow--next"><svg class="awards__icon"><use xlink:href="../img/sprite.svg#arrow-right-icon"></use></svg></button>',
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
    })

    $('.doctor-reviews__slider').slick({
        arrows: true,
        prevArrow: '<button class="doctor-reviews__arrow doctor-reviews__arrow--prev"><svg class="doctor-reviews__icon"><use xlink:href="../img/sprite.svg#arrow-left-icon"></use></svg></button>',
        nextArrow: '<button class="doctor-reviews__arrow doctor-reviews__arrow--next"><svg class="doctor-reviews__icon"><use xlink:href="../img/sprite.svg#arrow-right-icon"></use></svg></button>',
    })

    //Анимация стрелок
    $('.doctor-reviews__arrow').on('click', function() {
        $('.doctor-reviews__arrow').slideUp(0).delay(400).fadeIn(200);
    })

    //Рейтинг в отзывах
    $(".doctor-reviews__rating").rateYo({
        starWidth: "20px",
        normalFill: "#DAE4F9",
        ratedFill: "#306CE1",
        readOnly: true,
        starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M12.8105 7.5622C12.5895 7.5622 12.355 7.38294 12.2865 7.16207L10.1237 0.165693C10.0552 -0.055231 9.94477 -0.055231 9.87632 0.165693L7.71388 7.16207C7.64543 7.38299 7.41087 7.5622 7.1899 7.5622H0.191068C-0.0298985 7.5622 -0.0643214 7.67287 0.114589 7.80962L5.77644 12.1329C5.95536 12.2697 6.04503 12.5595 5.97658 12.7805L3.81419 19.7764C3.74574 19.9974 3.83542 20.0659 4.01433 19.9292L9.67618 15.6059C9.85509 15.4691 10.145 15.4691 10.3239 15.6059L15.9857 19.9296C16.1646 20.0664 16.2543 19.9978 16.1859 19.7768L14.0234 12.7809C13.955 12.56 14.0446 12.2701 14.2236 12.1333L19.8854 7.81004C20.0643 7.67328 20.0299 7.56261 19.8089 7.56261H12.8105V7.5622Z"/></svg>',
        spacing: "3px"
    });

    //Счетчик
    const number = document.querySelectorAll('.about-numbers__number');
    number.forEach(item => {
        window.addEventListener('scroll', function onScroll() {

            var numberTop = item.getBoundingClientRect().top,
                start = +item.innerHTML,
                end = +item.dataset.max;

            if (window.pageYOffset > numberTop - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                var interval = setInterval(function () {
                    item.innerHTML = ++start;
                    if (start == end) {
                        clearInterval(interval);
                    }
                }, 0.00001);
            }
        });
    });

    //Fancybox
    $('.awards__link').fancybox({
        width = "340%"
    });

    $('.doctor-biography__certificate').fancybox({
        width = "340%"
    });
});