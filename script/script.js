const nav = document.querySelector("nav");

const header = document.querySelector("header");

const button = document.querySelector("#bottone");

window.addEventListener("scroll", function () {
  const halfHeaderHeight = header.clientHeight / 2;
  if (this.window.scrollY > halfHeaderHeight) {
    nav.classList.add("cambio");
    button.classList.add("cambio2");
  } else {
    nav.classList.remove("cambio");
    button.classList.remove("cambio2");
  }
});
