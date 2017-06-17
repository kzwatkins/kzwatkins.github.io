$(document).ready(function(){
    $("#menuBtn").click(function(){
        // $(this).hide();
        // $(".menu-bar").hide();
        $(menu);
    });




});

// Adapted from https:// stackoverflow.com/questions/24259016/responsive-menu-show-and-hide-on-click
var menu = function() {

  // If the menu is hiding, then show it.
  // If the menu is showing, then hide it.
  var menuVisible = false;   // The menu is initially hiding.

  $('#menuBtn').click(function() {
    if (menuVisible) {
      $('.nav-list').css({'display':'none'});
      $(this).show();
      menuVisible = false;
    }
    else{
      $('.nav-list').css({'display':'block'});
      $(this).hide();
      menuVisible = true;
    }
  });

  $('.nav-list').click(function() {
    if (menuVisible) {
      $(this).css({'display':'none'});
      $('#menuBtn').show();
      menuVisible = false;
    } else{
      $(this).css({'display':'block'});
      $('#menuBtn').hide();
      menuVisible = true;
    }
  });

}
