$(document).ready(function(){
    $("#menuBtn").click(function(){
        // $(this).hide();
        // $(".menu-bar").hide();
        $(menu);
    });




});

// https:// stackoverflow.com/questions/24259016/responsive-menu-show-and-hide-on-click
var menu = function() {
  var menuVisible = false;
  $('#menuBtn').click(function() {
    if (menuVisible) {
      $('.menu-bar').css({'display':'none'});
      menuVisible = false;
      $('.nav-list').css({'display':'none'});
      return;
    }
    $('.menu-bar').css({'display':'block'});
    menuVisible = true;
    $('.nav-list').css({'display':'block'});
  });
  $('.menu-bar').click(function() {
    $(this).css({'display':'none'});
    menuVisible = false;
  });
}
