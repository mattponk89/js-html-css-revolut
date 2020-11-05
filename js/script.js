$(document).ready(function () {

  // $('.box').click(function(){
  //   $('.box').children().removeClass('active');
  //   $(this).children().addClass('active');
  // })

  $(".box").hover(function () {
    $('.box').children('.dropMenu').removeClass('active')
    $(this).children('.dropMenu').addClass('active')
    }, function () {
    $(this).children('.dropMenu').removeClass('active')
    }
  );


});
