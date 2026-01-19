const burgerBtn = document.querySelector(".burger");
const headerNavEl = document.querySelector(".header__nav");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger--active");
    headerNavEl.classList.toggle("header__nav--active");
});

document.body.addEventListener("click", (evt) => {
    const target = evt.target;

    if (!target.closest(".header__nav") && target.closest(".header__nav")) {
        burgerBtn.classList.remove("burger--active");
        headerNavEl.classList.remove("header__nav--active");
    }
});
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
console.log('script3!');