$(document).on('mouseup', function (e) { // При нажатии на документ
  let s = $('.header-bottom__actions.inlineStyle'); // берём .block.-active
  if (!s.is(e.target) && s.has(e.target).length === 0) {
    // Если нажат не он и не его дочернии И сам он существует
    s.removeClass('inlineStyle'); // То удаляем у него класс .active
    $('.header-bottom__nav').removeClass('hidden');
  }
});

$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() != "0") {
      $(this).fadeIn("slow")
    }
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() == "0") {
        $(scrollDiv).fadeOut("slow")
      } else {
        $(scrollDiv).fadeIn("slow")
      }
    });
    $(this).click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, "slow")
    })
  }
});
$(function () {
  $(".up").scrollToTop();
});


$(function () {
  $('.reviews-block-carousel .swiper-wrapper').each(function () {
    var column = 0;
    $(this).children().each(function () {
      h = $(this).height();
      if (h > column) {
        column = h;
      }
    });
    $(this).children().height(column);
  });

  $('.doctors ul h3').click(function () {
    $(this).toggleClass('active');
    $(this).next('.doctors__list').toggleClass('active');
  })


  $(window).on("load", function () {
    $(".mycustom-scroll").mCustomScrollbar();
  });

  const rollupItemHistory = function () {
    const btns = $('.rollup');

    btns.each(function () {
      $(this).click(function () {
        $(this).html('Подробнее').toggleClass('active').closest('.item').find('.item__body').slideToggle();
        if ($(this).hasClass('active')) {
          $(this).html('Свернуть');
        }
      })
    })
  }
  rollupItemHistory();
});

$(document).ready(function () {
  $('.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
})



$('.menu a').click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass('active');

})


$(function () {
  $("#datepicker").datepicker($.datepicker.regional["ru"]);
});

$(document).ready(function () {
  $('.js-example-basic-multiple').select2({
    width: '100%',
  });
});

// меню в шапке
if (window.innerWidth > 1279) {
  function responseMenu() {
    let wrap_width = $("ul.main-nav").outerWidth();
    let menu_width = 0;

    $("ul.main-nav>li.item").each(function () {
      menu_width +=
        $(this).outerWidth() +
        parseInt(getComputedStyle($(this)[0]).marginRight);
    });

    menu_width -= $("ul.main-nav>li.dd_menu").outerWidth();

    if (wrap_width < menu_width + 150) {
      $("ul.main-nav li.dd_menu").show();

      let items = $("ul.main-nav>li.item");
      $("ul.main-nav__submenu__other").append(items.eq(items.length - 1));

      responseMenu();
    }

    return false;
  }
  $(window)
    .on("resize", function () {
      if (window.innerWidth < 1920) {
        responseMenu();
      }
    })
    .trigger("resize");
}