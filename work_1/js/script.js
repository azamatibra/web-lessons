new WOW().init();

let burger = document.querySelector(".hamburger"),
  nav = document.querySelector(".header__nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});

$(function () {
  $("#header-projects").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".project").offset().top }, 1000);
    e.preventDefault();
  });
  $("#header-service").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".service").offset().top }, 1000);
    e.preventDefault();
  });






  $("#header-contact").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".footer").offset().top }, 1000);
    e.preventDefault();
  });
});

$(document).ready(function () {
  $(".header__slider").slick({
    arrows: true,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 15000,
    vertical: true,
    verticalSwiping: true,
  });
  $(".awards__slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 15000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".project__slider").slick({
    arrows: true,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 15000,
  });
});
$(document).ready(function () {
  var show = true;
  var countbox = ".number__wrap";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 500 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".number__count").css("opacity", "1");
      $(".number__count").spincrement({
        thousandSeparator: "",
        duration: 1500,
      });

      show = false;
    }
  });
});
