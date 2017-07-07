const IP_LOCATOR = 'https://jsonip.com/?callback=?';
const GEO_LOCATOR = 'https://www.geoplugin.net/php.gp?ip=';
const GOOGLE_GEO_LOCATOR = "https://maps.googleapis.com/maps/api/js";
const LATLNG_LOCATOR_BASED_ON_IP = 'https://freegeoip.net/json/';
// const LATLNG_LOCATOR_BASED_ON_IP = 'http://nominatim.openstreetmap.org/search';
const COUNTRY_LOCATOR_BASED_ON_LAT_LNG_PARAMS = '?format=json&addressdetails=1&limit=1&polygon_svg=1&q=';
const COUNTRY_LOCATOR_BASED_ON_LAT_LNG = 'http://nominatim.openstreetmap.org/search';
const DAYTON_CENTER = {lat: 39.7589, lng: -84.1916};

const KEY = "AIzaSyCVBAcVZ2W6B945Of8-KtvvH6P8TLN7wj4";
const CREDS = {
  key : KEY,
  //  contentType : "application/json"
};

const NUM_HEAT_TICKS = 5;
var index = 0;

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

    $("#work4uindicator").hover(function(){
      // $(this).css({"-webkit-animation-play-state" : "paused",
      // "animation-play-state" : "paused"});
        var position = getIndexPosition();
        index = getWork4uMsg(position);

        var location = getLocation();

    }, function(){
      // $(this).css({"-webkit-animation-play-state" : "running",
      // "animation-play-state" : "running"});
      $(this).html("Hover for Work Environments based on Distance!");
    });

});

function callback(data, status){
  //alert(status);
}

function getLocation(){
  //0) my location

  // 1) get ip
  var ip = getHostIP();
  // alert("ip: " + ip);

  // 2) estimate location based on ip
  // var latLng = getGeo(ip);
  // alert("latlng: " + JSON.stringify(latLng));

}


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

// Modified from https://stackoverflow.com/questions/19953328/how-to-get-ip-address-using-javascript-or-jquery
  function getHostIP() {
    var ip = null;

      $.getJSON(IP_LOCATOR, function (data) {
          // alert("getHostIP data: " + JSON.stringify(data));
          ip = data.ip;

          // 2) estimate location based on ip
          // var latLng = getGeo(ip);
          // alert("latlng: " + JSON.stringify(latLng));

          var latLng = getGeo(ip);
      });

    return ip;
  }

  function getGeo(ip){
    if(ip == "undefined") return null;

    // INDUSTRY (5%), GOV (7.5%), RESEARCH_LAB (10%),
    // NON_PROFIT (15% + Tutorial), SKULE (20% + Tutorial),
    // INDIVIDUAL (25% + Tutorial), VETERAN (30% + Tutorial)
    var pos;

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //
    //     // if(!countryIsUS(pos)){
    //     //   alert("Sorry, I only work for people in the US");
    //     //   return null;
    //     // }
    //
    //     alert(JSON.stringify(pos));
    //   }, function() {
    //
    //   });
    // } else {

      // ip = "92.222.91.242";
      $.getJSON(LATLNG_LOCATOR_BASED_ON_IP + ip, function (data) {
        var countryCode = data.country_code;
        alert("countryCode: " + countryCode);

        if(countryCode != "US"){
          alert("Country code was not US. Sorry, I only work for people in the US");
          return null;
        }

        pos = {};
        pos.lat = data.latitude;
        pos.lng = data.longitude;
        pos.city = data.city;
        pos.state = data.region_code;
        pos.zip = data.zip_code;

        checkDistance(pos);
      });
    // }
    //
    // return(pos);
  }

  function checkDistance(pos){
    var distance = getDistanceFromLatLon(DAYTON_CENTER, pos);
    alert(JSON.stringify(pos) + ", distance: " + distance);

    if(distance <= 75){
      alert("You're in my neighborhood. Let's discuss your business needs over coffee.");
    } else if(distance <= 100){
      alert("You're not far. Let's have a Skype meeting about your business needs");
    } else if(distance <= 200){
      alert("Let's have a Skype meeting about meeting intermittently.");
    } else {
      alert("We're a bit far from each other. Do you allow remote work?");
    }
  }

  function countryIsUS(pos){
    var lat = pos.lat;
    var lng = pos.lng;
    var isUS = true;

    $.getJSON(COUNTRY_LOCATOR_BASED_ON_LAT_LNG + COUNTRY_LOCATOR_BASED_ON_LAT_LNG_PARAMS + lat + "," + lng, function (data) {
      var countryCode = data.country_code;

      if(countryCode != "US"){
        alert("Sorry, I only work for people in the US");
        isUS = false;
      }

      return true;
    });
  }

  function getCountry(ip){
    var geoLocation = GEO_LOCATOR + ip;
  }

  function createCORSRequest(method, url, params, headers) {
  var xhr = new XMLHttpRequest();

  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
    addHeaders(xhr, headers);
    addParams(xhr, params);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
    addHeaders(xhr, headers);
    addParams(xhr, params);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

function addHeaders(xhr, headers){
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

}

function addParams(xhr, params){
  xhr.send("&key=" + KEY);
}
