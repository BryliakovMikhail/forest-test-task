const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  speed: 600,
  navigation: {
    nextEl: ".slider-next",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        `<span class="` +
        currentClass +
        `"></span>` +
        `<span class="` +
        totalClass +
        `"></span>`
      );
    },
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, "-100%"],
      opacity: 0,
      scale: 0,
    },
    next: {
      translate: [0, "100%", 0],
      opacity: 1,
      scale: 1,
    },
  },
  mousewheel: {
    sensitivity: 1,
    forceToAxis: true,
    releaseOnEdges: true,
  },
 
});

  const swiperSlides = document.querySelectorAll(".swiper-slide");
  swiperSlides.forEach((slide, index) => {
    const heroNumber = slide.querySelector(".hero__number");
    const number = index + 1;
    heroNumber.textContent = 0 + number.toString();
  });

  const stopSwiperScroll = document.querySelectorAll('.stop-swiper-scroll');
  stopSwiperScroll.forEach((el) => {
    el.addEventListener('mouseenter', () =>{
      swiper.mousewheel.disable()
    })
    el.addEventListener('mouseleave', () => {
      swiper.mousewheel.enable()
    })
  })
