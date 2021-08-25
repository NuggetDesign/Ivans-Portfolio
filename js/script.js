(function(){

  $(".js-mobile-menu").click(function(e){
    $(".js-mobile-menu").toggleClass("mobile-open");
  });

})();


$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
    ]
});

$(".num").counterUp({delay:10,time:1000});

