$(document).ready(function(){
  var menuVisible = false;

    $("#menuBtn").click(function(){
        // $(menu);
        menu(menuVisible);
        menuVisible = !menuVisible;
    });

});

// Adapted from https:// stackoverflow.com/questions/24259016/responsive-menu-show-and-hide-on-click
function menu(menuVisible) {

  // If the menu is hiding, then show it.
  // If the menu is showing, then hide it.
  //  var menuVisible = false;   // The menu is initially hiding.

  // $('#menuBtn').click(function() {

    if (menuVisible) {
      $('.nav-list').css({'display':'none'});
      showMenuOrg();
    }
    else{
      $('.nav-list').css({'display':'block'});
      showMenuX();
    }

  // });
}

function showMenuX (){
    $("#top-bar").css({transform: 'rotate(-45deg)'});
    $("#mid-bar").hide("fast");
    // $("#bottom-bar").hide();

    $("#bottom-bar").css({transform: 'translateY(-8px) rotate(45deg)'});
  }

function showMenuOrg (){
    $("#top-bar").css({transform: 'rotate(0deg)'});
    $("#mid-bar").show("fast");
    // $("#bottom-bar").hide();

    $("#bottom-bar").css({transform: 'translateY(0px) rotate(0deg)'});
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
