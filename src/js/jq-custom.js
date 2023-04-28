$(document).ready(function () {
  // main-menu
  // $(".main-menu__nav").on("click", "a.current:not(.active)", function () {
  //   $(this)
  //     .addClass("active")
  //     .siblings()
  //     .removeClass("active")
  //     .closest(".main-menu__inner")
  //     .find(".main-menu__links")
  //     .removeClass("active")
  //     .eq($(this).index())
  //     .addClass("active");
  // });

  $(".show-menu").on("click", function () {
    $(".main-menu").toggleClass("active");
    $(this).toggleClass("active");
    $("body").toggleClass("hidden");
  });

  $(".main-menu__close").on("click", function () {
    $(this).closest(".main-menu").removeClass("active");
  });

  $(".accordion__caption").on("click", function () {
    if ($(this).next().css("display") == "block") {
      $(this).next().slideUp();
      $(".accordion__caption").removeClass("active");
    } else {
      $(this).siblings(".accordion__content").slideUp();
      $(this).next().slideDown();
      $(".accordion__caption").removeClass("active");
      $(this).addClass("active");
    }
  });

  $(".modal__wrapper .close").on("click", function () {
    $(this).closest(".overlay").removeClass("active");
    $("body").removeClass("hidden");
  });

  $("#show-review").on("click", function () {
    $("body").addClass("hidden");
    $(".modal-review").addClass("active");
  });

  $(window)
    .on("resize", function () {
      $(".wrap").each(function () {
        const style = getComputedStyle($(this)[0]);
        const wrap = $(this);
        const spacer = $(this).find(".box-spacer");
        const rowHeigth = $(this).find(".box").last().outerHeight();
        const columns = style.gridTemplateColumns.split(" ");

        spacer.html("").height(rowHeigth).css({
          left: style.paddingLeft,
          right: style.paddingRight,
          bottom: style.paddingBottom,
          gridTemplateColumns: style.gridTemplateColumns,
        });

        $(columns).each(function () {
          spacer.append($("<span></span>"));
        });

        spacer.find("span").each(function () {
          const { x, y } = $(this)[0].getBoundingClientRect();
          const _x = parseInt(x);
          const _y = parseInt(y);
          const span = $(this);

          wrap.children().each(function () {
            const { x, y } = $(this)[0].getBoundingClientRect();
            const _xW = parseInt(x);
            const _yW = parseInt(y);

            if (_xW == _x && _yW == _y) {
              span.css("opacity", 0);
            }
          });
        });
      });
    })
    .trigger("resize");

  $("#showSearch").on("click", function () {
    $(".search-block").addClass("active");
  });

  $(function () {
    $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() != "0") {
        $(this).fadeIn("slow");
      }
      var scrollDiv = $(this);
      $(window).scroll(function () {
        if ($(window).scrollTop() == "0") {
          $(scrollDiv).fadeOut("slow");
        } else {
          $(scrollDiv).fadeIn("slow");
        }
      });
      $(this).click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
      });
    };
  });
  $(function () {
    $("#btnTop").scrollToTop();
  });

  //- #test кнопочка
});
