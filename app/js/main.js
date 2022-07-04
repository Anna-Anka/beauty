$(function () {
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
        // adaptiveHeight: true,
    })

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