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
