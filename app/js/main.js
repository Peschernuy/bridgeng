$(function(){


  $('.reviews__box').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows:true

    




  });


  $('.team__photo-box').slick({
    slidesToShow: 6,
    asNavFor: '.team__slider',
    focusOnSelect: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,

        }
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,

        }
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,

        }
      }


    ]
    

  });





  $('.team__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.team__photo-box',

    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,

        }
      }
    ]
    
  });


 







$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');


});











}); 