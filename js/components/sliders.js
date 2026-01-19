const swiperMore = new Swiper(".swiper.more-slider__swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,

    pagination: {
        el: ".more-slider .swiper-pagination",
        clickable: true,
    },

    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },

    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

const swipeTop = new Swiper(".swiper.top__slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,

    pagination: {
        el: ".top__slider .swiper-pagination",
        clickable: true,
    },

    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },

    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 5,
        },
    },
});