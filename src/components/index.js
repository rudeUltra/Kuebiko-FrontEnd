import $ from 'jquery';

$(function ($) {
  $(".flickfeed").on("init", function () {
    var currentfirst = $(this).find(".slick-active").first();
    $(currentfirst).addClass("firster");
    var currentlast = $(this).find(".slick-active").last();
    $(currentlast).addClass("laster");
  });

  function getSliderSettings() {
    return {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2,
      //   variableWidth: true,
    //   adaptiveHeight: true,
    //   centerMode: true,
    //   centerPadding: "60px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.25,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
  }

  $(".flickfeed").slick(getSliderSettings());

  $(".slick-slide").mouseenter(function () {
    if ($(this).hasClass("firster")) {
      //  console.log('firster');
      var hoverslide = $(this);
      $(hoverslide).nextAll().addClass("furthernextslides");
      //  $(hoverslide).prevAll().addClass('prevslides');
    } else if ($(this).hasClass("laster")) {
      hoverslide = $(this);
      $(hoverslide).prevAll().addClass("furtherprevslides");
    } else {
      hoverslide = $(this);
      $(hoverslide).nextAll().addClass("nextslides");
      $(hoverslide).prevAll().addClass("prevslides");
    }
  });

  $(".slick-slide").mouseleave(function () {
    $(this).parent().find(".slick-slide").removeClass("nextslides");
    $(this).parent().find(".slick-slide").removeClass("prevslides");
    $(this).parent().find(".slick-slide").removeClass("furthernextslides");
    $(this).parent().find(".slick-slide").removeClass("furtherprevslides");
  });

  // on slide change, find the new first slide-active
  $(".flickfeed").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var currentfirst = $(this).find(".slick-active").first();
      $(this).find(".slick-slide").removeClass("firster");
      $(currentfirst).addClass("firster");
      var currentlast = $(this).find(".slick-active").last();
      $(this).find(".slick-slide").removeClass("laster");
      $(currentlast).addClass("laster");
    }
  );

  // on slide init, find the new first slide-active
});
