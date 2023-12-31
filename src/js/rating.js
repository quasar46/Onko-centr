jQuery(function ($) {
  $(".rating i").on("mouseenter", function (e) {
    var root = $(this).parent();
    var curentIndex = $(this).index();

    root.find("i.active").removeClass("active");

    var icons = root.find("i");
    for (let i = 0; i <= curentIndex; i++) {
      icons.eq(i).addClass("active");
    }
  });

  $(".rating i").on("click", function () {
    var input = $(this).parent().parent().find("input");
    var value = $(this).data("val");
    input.val(value).trigger("input");
  });

  $(".rating").on("mouseleave", function () {
    var root = $(this).parent();
    var input = root.find("input");

    $(this).find("i.active").removeClass("active");

    if (input.val()) {
      var icons = root.find("i");
      var curentIndex = input.val();
      for (let i = 0; i < curentIndex; i++) {
        icons.eq(i).addClass("active");
      }
    }
  });
});
