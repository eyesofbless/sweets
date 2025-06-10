const swiper = new Swiper('.js-products-sliders', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.js-products-pagination',
        clickable: true,
    },
});
