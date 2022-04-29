$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 5,
  responsiveClass: true,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      dot: true,
    },
    600: {
      items: 2,
      dot: true,
    },
    1100: {
      items: 3,
      dot: true,
    },
    1200: {
      items: 4,
      dot: true,
      loop: false,
    },
    1300: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
});
