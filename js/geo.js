// Adapted from https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula

function getDistanceFromLatLon(pos1, pos2) {
  var lat1 = pos1.lat;
  var lng1 = pos1.lng;
  var lat2 = pos2.lat;
  var lng2 = pos2.lng;

  var earthRadius = 3959; // Radius of the earth in miles
  var distanceLat = deg2rad(lat2-lat1);
  var distanceLon = deg2rad(lng2-lng1);

  var a =
    Math.sin(distanceLat/2) * Math.sin(distanceLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(distanceLon/2) * Math.sin(distanceLon/2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distance = earthRadius * c; // Distance in miles

  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
