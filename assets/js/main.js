(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".neutral_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    navText: [
      '<img src="assets/img/right-arrow.svg" alt="">',
      '<img src="assets/img/right-arrow.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      767: {
        items: 2
      },
      992: {
        items: 6
      }
    }
  });


  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="100" 

 
})(jQuery);
