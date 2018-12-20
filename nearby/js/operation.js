$(function(){
    $(".three_box ul li a").click(function(){
     $(this).children('a').addClass('active');
     $(this).siblings().children('a').removeClass("active");
 })
 })