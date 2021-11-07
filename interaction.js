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
function demonTwo () {
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
