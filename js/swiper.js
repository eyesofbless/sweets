const swiper = new Swiper('.js-hero-sliders', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.js-hero-btn-next',
        prevEl: '.js-hero-btn-prev',
    },
    pagination: {
        el: '.js-hero-pagination',
        clickable: true,
    },

    on: {
        init: function () {
            updateHeroBackground(this.slides[this.activeIndex]);
        },
        slideChange: function () {
            updateHeroBackground(this.slides[this.activeIndex]);
        }
    }
});

function updateHeroBackground(activeSlide) {
    const bg = activeSlide.getAttribute('data-bg');
    document.querySelector('.b-hero').style.backgroundImage = `url(${bg})`;
}


const productsSwiper = new Swiper('.js-products-sliders', {
    slidesPerView: 4,
    navigation: {
        nextEl: '.js-products-btn-next',
        prevEl: '.js-products-btn-prev',
    },
    pagination: {
        el: '.js-products-pagination',
        clickable: true,
    },
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        812: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    },
});

const diplomasSwiper = new Swiper('.js-diplomas-sliders', {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: '.js-diplomas-btn-next',
        prevEl: '.js-diplomas-btn-prev',
    },
    pagination: {
        el: '.js-diplomas-pagination',
        clickable: true,
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
        },
        584: {
            slidesPerView: 2,
        },
        788: {
            slidesPerView: 3,
        },
        948: {
            slidesPerView: 4,
        },
        1151: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        }
    },
});