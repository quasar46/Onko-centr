document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-cases", {
    // Optional parameters
    loop: true,
    centeredSlides: false,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-cases .swiper-button-next",
      prevEl: ".swiper-cases .swiper-button-prev",
    },

    slidesPerView: "auto",
    spaceBetween: 4,
    breakpoints: {
      767: {
        slidesPerView: 6,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });

  const swiper2 = new Swiper(".swiper-reviews ", {
    // Optional parameters
    // loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-reviews .swiper-button-next",
      prevEl: ".swiper-reviews .swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  document.querySelectorAll(".card__swiper-container").forEach((n) => {
    const thumbs = new Swiper(n.querySelector(".mySwiper"), {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loop: true,
      breakpoints: {
        767: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    });
    const slider = new Swiper(n.querySelector(".mySwiper2"), {
      spaceBetween: 10,
      navigation: {
        nextEl: n.querySelector(".swiper-button-next"),
        prevEl: n.querySelector(".swiper-button-prev"),
      },
      thumbs: {
        swiper: thumbs,
      },
    });
  });

  const cards = document.querySelectorAll(".cases__carousel .swiper-slide");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      console.log(card);
      document.querySelector("body").classList.add("hidden");
      const cardAtr = card.getAttribute("data-swiper-slide-index");
      const cardModals = document.querySelectorAll(".card-modal");
      cardModals[cardAtr].classList.remove("hidden");
    });
  });

  $(".card__close").click(function () {
    $(".card-modal").addClass("hidden");
    $("body").removeClass("hidden");
  });

  $(".show-uno").click(function () {
    $(".card-uno").removeClass("hidden");
    document.querySelector("body").classList.add("hidden");
  });
  $(".show-bdns").click(function () {
    $(".card-bdns").removeClass("hidden");
    document.querySelector("body").classList.add("hidden");
  });
  $(".show-dwill").click(function () {
    $(".card-dwill").removeClass("hidden");
    document.querySelector("body").classList.add("hidden");
  });
});
