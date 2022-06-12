const header = document.querySelector("#header");
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) header.classList.add("scrollY");
  else header.classList.remove("scrollY");
});

openBtn.addEventListener("click", () => {
  header.classList.add("clicked");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("clicked");
});
