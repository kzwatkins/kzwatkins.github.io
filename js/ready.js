$(document).ready(function(){
    $("#menuBtn").click(function(){
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
      console.log("The menu is visible");
      $('.nav-list').css({'display':'none'});
      showMenuOrg();
      console.log("Show the original menu button.");
      menuVisible = false;
    }
    else{
      console.log("The menu is invisible");
      $('.nav-list').css({'display':'block'});
      showMenuX();
      console.log("Show the x menu button");

      menuVisible = true;
    }
  });
}

function showMenuX (){
    $("#top-bar").css({transform: '-45deg'});//rotate(-45));
    $("#mid-bar").fadeOut();
    $("#bottom-bar").css({transform: '45deg'});
  }

function showMenuOrg(){
    $("#top-bar").css({transform: '45deg'});
    $("#mid-bar").fadeIn();
    $("#bottom-bar").css({transform: '-45deg'});
  }


  // $('.nav-list').click(function() {
  //   if (menuVisible) {
  //     $(this).css({'display':'none'});
  //     // $('#menuBtn').show();
  //     showMenuX();
  //     menuVisible = false;
  //   } else{
  //     $(this).css({'display':'block'});
  //     // $('#menuBtn').hide();
  //     showMenuOrg();
  //     menuVisible = true;
  //   }
  // });







/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// function openNav() {
//     $(".nav-list").css({'width' : '250px'});
//   ("main").css({'marginLeft' : '250px'});
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }
//
// /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     document.body.style.backgroundColor = "white";
// }
