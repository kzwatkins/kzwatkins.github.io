function getWork4uMsg(position) {
  $("#work4uindicator").html(insertWork4uMsg(position));
  return (index + 1) % NUM_HEAT_TICKS;
}

function insertWork4uMsg(position){
  var left = position.left;
  var width = $(".work4u:first").width();
  var offset = 20;

  if(left < 0.25 * width + offset){
    // case 0: return "Sorry, US work only!"; // FREEZING!
      // $(".work4umsg").css("color", "white");
      return "Too Far: Remote Only"; // Freezing
    } else if(left < 0.5 * width + offset){
      // $(".work4umsg").css("color", "black");
      return "Kinda Far: Bi-Monthly Visits"; // Getting warmer
    } else if(left < 0.75 * width + offset){
      // $(".work4umsg").css("color", "white");
      return "Kinda Close: Weekly Visits"; // A little warmer
    } else{
      // $(".work4umsg").css("color", "black");
      return "Neighbors: Flexible"; // BOILING HOT!
  }
}

function getIndexPosition(){
  return $("#work4uindicator").position();
}
