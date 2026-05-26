window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // Se rolar mais de 50 pixels, adiciona a classe. Se voltar ao topo, remove.
  if (window.scrollY > 50) {
    header.classList.add("header-rolado");
  } else {
    header.classList.remove("header-rolado");
  }
});
