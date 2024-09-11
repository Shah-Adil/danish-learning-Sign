const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.style = "display: none; ";
});

$("#menu-bar").click(() => {
  $(".nav").toggleClass("active");
  $("#menu-bar").toggleClass("fa-xmark");
})
