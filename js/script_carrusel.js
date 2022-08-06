var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 60,
    // slidesPerGroup: 3,
    loop: true,
    centerSlider:'true',
    fade:'true',
    grabCursor: 'true',
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1, 
        },
        600:{
            slidesPerView: 2, 
        },
        890:{
            slidesPerView: 3, 
        },
        1270:{
            slidesPerView: 4, 
        },
        
        
    },
});