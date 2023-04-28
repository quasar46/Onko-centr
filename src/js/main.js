function openItem(evt, itemName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(itemName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.querySelectorAll(".tablinks").forEach((item) => {
  if (window.innerWidth <= 767) {
    item.addEventListener("click", function () {
      document.querySelector(".main-menu__submenu").style.display = "flex";
      document.querySelector(".main-menu__back").style.display = "flex";
      document.querySelector(".main-menu__social").style.display = "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".main-menu__back")
    .addEventListener("click", function () {
      document.querySelector(".main-menu__submenu").style.display = "none";
      document.querySelectorAll(".tabcontent").forEach((item) => {
        item.style.display = "none";
      });
    });
  const minViewPort = (min = 375) => {
    if (window.innerWidth <= min) {
      const viewport = document.querySelector('[name="viewport"]');
      if (viewport)
        viewport.setAttribute("content", `width=${min}, user-scalable=no`);
    }
  };
  minViewPort();

  const swiper = new Swiper(".swiper-programs", {
    slidesPerView: 3,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-nav__programs .button-swiper__next",
      prevEl: ".swiper-nav__programs .button-swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 6,
      },
    },
  });

  // tabs
  var jsTriggers = document.querySelectorAll(".trigger"),
    jsContents = document.querySelectorAll(".js-tab-content");
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var id = this.getAttribute("data-tab"),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector(".trigger.active"),
        activeContent = document.querySelector(".js-tab-content.active");

      activeTrigger.classList.remove("active"); // 1
      trigger.classList.add("active"); // 2

      activeContent.classList.remove("active"); // 3
      content.classList.add("active"); // 4
      window.dispatchEvent(new Event("resize"));
    });
  });

  if (document.getElementById("phone")) {
    var element = document.getElementById("phone");
    var maskOptions = {
      mask: "+7(000)000-00-00",
      lazy: false,
    };
    var mask = new IMask(element, maskOptions);
  }

  if (document.querySelectorAll(".first-block__wrapper").length > 0) {
    const heightBlock = document.querySelector(
      ".first-block__wrapper"
    ).clientHeight;

    window.addEventListener("scroll", function () {
      var cont_top = window.pageYOffset
        ? window.pageYOffset
        : document.body.scrollTop;
      if (cont_top > heightBlock) {
        document.querySelector(".burger").classList.add("burger--blue");
      } else {
        document.querySelector(".burger").classList.remove("burger--blue");
      }
    });
  }
});
