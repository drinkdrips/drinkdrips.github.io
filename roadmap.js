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

    document.querySelectorAll('.menu-item svg').forEach(arrow => {
        arrow.style.transform = 'rotate(0deg)'; // Reseta as setas para baixo
    });

    // Alterna a visibilidade do dropdown clicado
    const isHidden = dropdown.classList.toggle('hidden');

    // Adiciona uma transição de altura
    if (isHidden) {
        dropdown.style.maxHeight = '0'; // Fecha o dropdown
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px'; // Abre o dropdown
    }

    // Identifica a seta SVG no link clicado
    const arrow = event.target.querySelector('svg');

    // Verifica se o dropdown está visível e rotaciona a seta
    if (!isHidden) {
        arrow.style.transform = 'rotate(180deg)'; // Seta para cima
    } else {
        arrow.style.transform = 'rotate(0deg)'; // Seta para baixo
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
