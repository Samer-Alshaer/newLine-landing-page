/*------------------- mopile menu -------------------*/
$(document).ready(function () {
     $(".mobile-menu-icon").click(function () {
          $(this).toggleClass("open");
          $(".mobile-menu").toggleClass("show");
          $(".back-drop").toggleClass("show fade");
          if ($(".mobile-menu").hasClass("show")) {
               $("body").css({ "overflow": "hidden" });
          } else {
               $("body").css({ "overflow": "auto" })
          }
     })
});