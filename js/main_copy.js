$(document).ready(function () {


  var $sideMenu = $('.side_menu'),
    $showBtn = $('.side_menu_btn'),
    $hideBtn = $('.side_menu').find('.close_btn'),
    $list = $sideMenu.find('.main_menu > li > a'),
    $shadow = $('.side_shadow');


  // 사이드 메뉴 열림
  $showBtn.on('click', function () {
    // 사이드 메뉴 왼쪽 -->> 오른쪽
    $sideMenu.stop().animate({
      left: 0
    }, 500);
    $shadow.stop().fadeIn(300); // 그림자 나타남!
  });


  // 사이드 메뉴 닫힘
  $hideBtn.on('click', function () {
    // 사이드 메뉴 왼쪽 <<-- 오른쪽
    $sideMenu.stop().animate({
      left: -500
    }, 500);
    $shadow.stop().fadeOut(300); // 그림자 사라짐!
  });


  // 사이드 메뉴 리스트 동작
  $list.on('click', function () {
    $('.sub_menu').not($(this).siblings('.sub_menu')).stop(false, true).slideUp(500);
    $(this).siblings('.sub_menu').stop(false, true).slideToggle(500);
  });


});