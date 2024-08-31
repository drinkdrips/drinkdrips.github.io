// Função para abrir o modal e prevenir o rolar do fundo
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        body.classList.add("prevent-background-scroll");
    }
}

// Fechar o modal ao clicar no botão de fechar
closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.closest(".popup");
        modal.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    });
});

// Fechar o modal ao clicar fora dele
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        e.target.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    }
});

// Expandir/Colapsar Artigos
document.querySelectorAll("#infographic article").forEach((article) => {
   article.addEventListener("click", () => {
      article.classList.toggle("active");
      // Atualiza o atributo aria-expanded
      article.setAttribute("aria-expanded", article.classList.contains("active"));
   });
});

// Sempre Colapsar Artigos ao clicar fora
document.addEventListener("mouseup", (e) => {
   document.querySelectorAll("article.active").forEach((article) => {
      if (article.contains(e.target)) return;
      if (article === e.target) return;
      article.classList.remove("active");
      article.setAttribute("aria-expanded", "false");
   });
});

// Ativar artigos através das interações de prev/next
document.querySelectorAll("#infographic article .roadmapBtn").forEach((roadmapBtn) => {
   roadmapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      var isprev = e.target === e.target.parentElement.firstElementChild;
      var article = roadmapBtn.closest("article");
      var step = parseInt(article.getAttribute("data-step"));
      var next = document.querySelector(`[data-step="${isprev ? step - 1 : step + 1}"]`);
      if (next) {
         next.classList.add("active");
         next.setAttribute("aria-expanded", "true");
         next.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
   });
});
