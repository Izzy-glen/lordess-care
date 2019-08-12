// Changing lading pages based on screen resize
var browserWidth = $(window).width();
var documentHeight = $(window).height();
    $(".banner").height(documentHeight);
setInterval(function () {
  $(window).on('resize', function (){
var documentHeight = $(window).height();
    $(".banner").height(documentHeight);
  });
// if (browserWidth > 767) {
//   $(".banner").css({"background":"url(../stock/bg2.jpg)"});
// }
}, 5000);
