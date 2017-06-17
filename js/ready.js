$(document).ready(function(){
    $("#menuBtn").click(function(){
        // $(this).hide();
        // $(".menu-bar").hide();
        $(menu);
    });




});

// Adapted from https:// stackoverflow.com/questions/24259016/responsive-menu-show-and-hide-on-click
var menu = function() {
  var menuVisible = false;
  $('#menuBtn').click(function() {

    if (!menuVisible) {
      $('.nav-list').css({'display':'block'});
      $(this).hide();
      menuVisible = true;
      return;
    }

    $('.nav-list').css({'display':'none'});
    $(this).show();
    menuVisible = false;
  });

  $('.menu-bar').click(function() {
    $(this).css({'display':'none'});
    menuVisible = false;
  });
}
