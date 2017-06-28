const GEO_LOCATOR = 'http://www.geoplugin.net/php.gp?ip=';
const GOOGLE_GEO_LOCATOR = "https://maps.googleapis.com/maps/api/js";
const KEY = "AIzaSyCVBAcVZ2W6B945Of8-KtvvH6P8TLN7wj4";
const CREDS = {
  key : KEY,
  //  contentType : "application/json"
};



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

    // $.post(GOOGLE_GEO_LOCATOR, CREDS, callback, 'json');

    // var url = GOOGLE_GEO_LOCATOR;

    // $.post(url, CREDS, callback);

    // var xhr = createCORSRequest('POST', url);
    // if (!xhr) {
    //   throw new Error('CORS not supported');
    // }
    // else{
    //   alert(JSON.stringify(xhr));
    // }

    // $.ajax({
    //   type: 'GET',
    //
    //   // The URL to make the request to.
    //   url: 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html',
    //   contentType: 'text/plain',
    //   xhrFields: {
    //     withCredentials: false
    //   },
    //
    //   headers: {
    //     // Set any custom headers here.
    //     // If you set any non-simple headers, your server must include these
    //     // headers in the 'Access-Control-Allow-Headers' response header.
    //   },
    //
    //   success: function() {
    //     alert(status);
    //   },
    //
    //   error: function() {
    //     alert(status);
    //   }
    // });

    // var ip = getHostIP();
    // var country = getCountry(ip);
    //
    // if(country != "NON_US"){
    //    var ipType = getIPType(ip);        var discount = getDiscountType(ipType);
    // }
    // else{
    //   $("#country").html("Thank you for your interest, but I only work for companies in the USA.");
    // }

});

function callback(data, status){
  alert(status);
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
      $.getJSON("http://jsonip.com/?callback=?", function (data) {
          return data.ip;
          // alert(JSON.stringify(data));
      });
  }

  function getGeo(ip){
    // INDUSTRY (5%), GOV (7.5%), RESEARCH_LAB (10%),
    // NON_PROFIT (15% + Tutorial), SKULE (20% + Tutorial),
    // INDIVIDUAL (25% + Tutorial), VETERAN (30% + Tutorial)
    var pos;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      }, function() {

      });
    } else {
      // Browser doesn't support Geolocation

    }

    alert(pos);
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
