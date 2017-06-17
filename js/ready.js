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

  $('.nav-list').click(function() {
    $(this).css({'display':'none'});
    $('#menuBtn').show();
    menuVisible = false;
  });
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    $(".nav-list").css({'width' : '250px'});
  ("main").css({'marginLeft' : '250px'});
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
