const swiper = new Swiper('.js-products-sliders', {
    slidesPerView: 2,
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
