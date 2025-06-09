const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
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
