// dont show phone navigation list until loaded
const navigationList = document.querySelector(".navigation-phone__list");
navigationList.onload = setTimeout(function changeStyle() {
  navigationList.style.display = "initial";
}, 1000);

// change navigation onscroll
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    $("a, .logo, #navbar").toggleClass("scroll", $(this).scrollTop() > 150);
  });
});

// Facebook messenger icon
window.fbAsyncInit = function() {
  FB.init({
    appId: "95100348886",
    xfbml: true,
    version: "v2.6"
  });
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

//Parama toggle image
jQuery(document).ready(function($) {
  $(".parama__center--img").click(function() {
    $(this).toggleClass("full");
  });
});

//Map functionality beginning
var map = L.map("map").setView([55.709436, 21.147583], 9);
var osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osmLayer = new L.TileLayer(osmUrl, {
  maxZoom: 19,
  attribution: "Map data © OpenStreetMap contributors"
});
map.addLayer(osmLayer);

//this section sets the behavior of the markers themselves
var marker1 = L.marker([55.727438, 21.512214], {
  title: "Vežaičiai (PG28)"
})
  .addTo(map)
  .bindPopup("Vežaičiai (PG28)")
  .on("click", clickZoom);
var marker2 = L.marker([55.642468, 21.410483], {
  title: "Gelžininiai (PG29)"
})
  .addTo(map)
  .bindPopup("Gelžininiai (PG29)")
  .on("click", clickZoom);
var marker3 = L.marker([55.468622, 21.3975], {
  title: "Saugai (PG30)"
})
  .addTo(map)
  .bindPopup("Saugai (PG30)")
  .on("click", clickZoom);
var marker4 = L.marker([55.515283, 21.233762], {
  title: "Dreverna"
})
  .addTo(map)
  .bindPopup("Dreverna")
  .on("click", clickZoom);
var marker6 = L.marker([55.919811, 21.575227], {
  title: "Kartenos aerodromas"
})
  .addTo(map)
  .bindPopup("Kartenos aerodromas")
  .on("click", clickZoom);
var marker7 = L.marker([55.668047, 21.312241], {
  title: "Dovilai"
})
  .addTo(map)
  .bindPopup("Dovilai")
  .on("click", clickZoom);

function clickZoom(e) {
  map.setView(e.target.getLatLng(), 11);
}

//everything below here controls interaction from outside the map
var markers = [];
markers.push(marker1);
markers.push(marker2);
markers.push(marker3);
markers.push(marker4);
markers.push(marker6);
markers.push(marker7);

function markerFunction(id) {
  for (var i in markers) {
    var markerID = markers[i].options.title;
    var position = markers[i].getLatLng();
    if (markerID == id) {
      map.setView(position, 11);
      markers[i].openPopup();
    }
  }
}

$("a").click(function() {
  markerFunction($(this)[0].id);
});

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
}
function myFunction1() {
  var copyText = document.getElementById("myInput1");
  copyText.select();
  document.execCommand("copy");
}
function myFunction2() {
  var copyText = document.getElementById("myInput2");
  copyText.select();
  document.execCommand("copy");
}
function myFunction3() {
  var copyText = document.getElementById("myInput3");
  copyText.select();
  document.execCommand("copy");
}
function myFunction4() {
  var copyText = document.getElementById("myInput4");
  copyText.select();
  document.execCommand("copy");
}
function myFunction5() {
  var copyText = document.getElementById("myInput5");
  copyText.select();
  document.execCommand("copy");
}
function myFunction6() {
  var copyText = document.getElementById("myInput6");
  copyText.select();
  document.execCommand("copy");
}

document.getElementById("reset").addEventListener("click", reset);

function reset() {
  map.setView([55.709436, 21.147583], 9);
}

//Map functionality Ending
