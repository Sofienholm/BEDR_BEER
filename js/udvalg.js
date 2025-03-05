function toggleDropdown() {
    let box = document.getElementById("beerBox");
    let button = document.querySelector(".dropdown-btn");

    box.classList.toggle("show");
    button.classList.toggle("open");
}
// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }