const swiper = new Swiper('.js-hero-sliders', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
    loop: true,
    navigation: {
        nextEl: '.js-products-next',
        prevEl: '.js-products-prev',
    },
    pagination: {
        el: '.js-products-pagination',
        clickable: true,
    },
});