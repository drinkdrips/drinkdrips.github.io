function toggleDropdown(event, dropdownId) {
    event.preventDefault(); // Evita o comportamento padrão do link
    
    const dropdown = document.getElementById(dropdownId);

    // Fecha todos os outros dropdowns abertos
    document.querySelectorAll('.menu .absolute').forEach(menu => {
        if (menu !== dropdown) {
            menu.classList.add('hidden'); // Garante que os outros dropdowns sejam fechados
            menu.style.maxHeight = '0'; // Reseta a altura para 0
        }
    });

    // Alterna a visibilidade do dropdown clicado
    const isHidden = dropdown.classList.toggle('hidden');

    // Adiciona uma transição de altura
    if (isHidden) {
        dropdown.style.maxHeight = '0'; // Fecha o dropdown
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px'; // Abre o dropdown
    }
}

// Função para alternar o modal
function toggleModal(modalId) {
    // Obtenha o modal que será aberto
    const modal = document.getElementById(modalId);

    if (modal) {
        // Fecha o dropdown somente quando o modal estiver prestes a ser aberto (quando estiver oculto)
        if (modal.style.display !== "block") {
            closeAllDropdowns(); // Fecha os dropdowns antes de abrir o modal
        }

        // Verifica o estado atual do modal e alterna entre visível e oculto
        if (modal.style.display === "block") {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }
    }
}

// Função para fechar todos os dropdowns
function closeAllDropdowns() {
    document.querySelectorAll('.menu .absolute').forEach(dropdown => {
        dropdown.classList.add('hidden'); // Adiciona 'hidden' a todos os dropdowns
    });
}

// Seleciona os botões de fechar e adiciona eventos de clique
const closeBtns = document.querySelectorAll(".close-btn");
const maximizeBtns = document.querySelectorAll(".maximize-btn");
const body = document.querySelector("body");

closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.closest(".popup");
        if (modal) {
            modal.style.display = "none";
            body.classList.remove("prevent-background-scroll");
        }
    });
});

// Fecha o modal ao clicar fora dele
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        e.target.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    }
});
maximizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.closest(".popup");
        let container = modal.querySelector(".popup-container");
        let body = modal.querySelector(".popup-body");

        if (modal.classList.contains("maximized")) {
            // Reverte para o tamanho normal
            container.style.width = "min(900px, 90%)";
            container.style.height = "auto";  // Ajusta a altura para conteúdo normal
            container.style.top = "45%";  // Centraliza verticalmente
            container.style.left = "50%";  // Centraliza horizontalmente
            container.style.transform = "translate(-50%, -50%)";  // Mantém o centro na viewport
            body.style.height = "70vh";  // Ajusta a altura do corpo do modal
        } else {
            // Maximiza o modal, sem usar transform
            container.style.width = "90vw";  // Largura da tela quase completa
            container.style.height = "90vh";  // Altura da tela quase completa
            container.style.top = "5vh";  // Distância do topo
            container.style.left = "5vw";  // Distância da esquerda
            container.style.transform = "none";  // Remove transform
            body.style.height = "80vh";  // Ajusta a altura do corpo do modal para caber
        }

        modal.classList.toggle("maximized");
        body.classList.toggle("prevent-scroll");
    });
});

// Expande/Colapsa os artigos
document.querySelectorAll("#infographic article").forEach((article) => {
    article.addEventListener("click", () => {
        console.log('Artigo clicado:', article); // Adicione este log
        article.classList.toggle("active");
    });
});

// Sempre colapsa o artigo ao clicar fora dele
document.addEventListener("mouseup", (e) => {
    document.querySelectorAll("article.active").forEach((article) => {
        if (article.contains(e.target)) return;
        if (article === e.target) return;
        article.classList.remove("active");
    });
});

// Ativa os artigos através das interações de prev/next
document.querySelectorAll("#infographic article .roadmapBtn").forEach((roadmapBtn) => {
    roadmapBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('Botão clicado:', e.target); // Adicione este log
        const isPrev = e.target === e.target.parentElement.firstElementChild;
        const article = roadmapBtn.closest("article");
        const step = parseInt(article.getAttribute("data-step"), 10);
        const next = document.querySelector(`[data-step="${isPrev ? step - 1 : step + 1}"]`);
        if (next) {
            next.classList.add("active");
            next.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    });
});

