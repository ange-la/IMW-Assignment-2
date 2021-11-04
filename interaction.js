/* ADD SOUND ON CLICK FOR HOME PAGE POSTERS */

/* NAVIGATION BAR */

/* Easier carousel @ https://flickity.metafizzy.co */
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

document.getElementById("myBtn").onclick = function() {myFunction()};

function showOnlick(){
  document.getElementById("myDropdown").classList.toggle("show");
}
