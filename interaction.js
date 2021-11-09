/* Easier carousel @ https://flickity.metafizzy.co */
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});



/* Responsive navbar @ https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp */
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}



/* ADD SOUND ON CLICK FOR HOME PAGE POSTERS */
/* https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click */
function demonTwo() {
  var audio = document.getElementById("demon-sound1");
  audio.play();
}

function demonMugen() {
  var audio = document.getElementById("demon-sound2");
  audio.play();
}

function fateSound() {
  var audio = document.getElementById("fate-sound");
  audio.play();
}



/* FILTER theatrical posters */
/* https://www.w3schools.com/howto/howto_js_filter_elements.asp */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
