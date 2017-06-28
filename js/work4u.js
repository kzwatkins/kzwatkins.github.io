function getWork4uMsg(position) {
  $("#work4uindicator").html("<h3>" +insertWork4uMsg(position)+ "</h3>");
  return (index + 1) % NUM_HEAT_TICKS;
}

function insertWork4uMsg(position){
  var left = position.left;
  var width = $("#work4u").width();
  var offset = 20;

  if(left < 0.25 * width + offset){
    // case 0: return "Sorry, US work only!"; // FREEZING!
      // $(".work4umsg").css("color", "white");
      return "Too far to visit: Remote work only"; // Freezing
    } else if(left < 0.5 * width + offset){
      // $(".work4umsg").css("color", "black");
      return "Not too far away: remote work & 1 visit weekly"; // Getting warmer
    } else if(left < 0.75 * width + offset){
      // $(".work4umsg").css("color", "white");
      return "Fairly close by: remote work & 2-3 visits weekly"; // A little warmer
    } else{
      // $(".work4umsg").css("color", "black");
      return "Neighbors: I'm open for contracts and subcontracts weekdays"; // BOILING HOT!
  }
}

function getIndexPosition(){
  return $("#work4uindicator").position();
}
