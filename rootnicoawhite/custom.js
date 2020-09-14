$(function() {
    $('.multiple-items').slick({
      draggable: true,
      autoplay: true, /* this is the new line */
      autoplaySpeed: 2000,       
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: '0',
      });
});