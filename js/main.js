const header = document.querySelector("#header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) header.classList.add("scrollY");
  else header.classList.remove("scrollY");
});

