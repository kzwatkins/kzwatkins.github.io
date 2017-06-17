$(document).ready(function(){
  var menuVisible = false; // The menu icon is initially showing, and menu is hiding.

    $("#menuBtn").click(function(){
        menu(menuVisible);
        menuVisible = !menuVisible;
    });

    $(".nav-list").click(function(){
        menu(menuVisible);
        menuVisible = !menuVisible;
    });

});

// (Ultra!) Adapted from https:// stackoverflow.com/questions/24259016/responsive-menu-show-and-hide-on-click
// If the menu is hiding, then show it.
// If the menu is showing, then hide it.

function menu(menuVisible) {

    if (menuVisible) {
      $('.nav-list').css({'display':'none'});
      showMenuOrg();
    }
    else{
      $('.nav-list').css({'display':'block'});
      showMenuX();
    }
}

function showMenuX (){
    $("#top-bar").css({transform: 'rotate(-45deg)'});
    $("#mid-bar").hide();
    $("#bottom-bar").css({transform: 'translateY(-8px) rotate(45deg)'});
  }

function showMenuOrg (){
    $("#top-bar").css({transform: 'rotate(0deg)'});
    $("#mid-bar").show();
    $("#bottom-bar").css({transform: 'translateY(0px) rotate(0deg)'});
  }
