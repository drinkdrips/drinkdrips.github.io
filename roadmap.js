  function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  }



const iconBoxes = document.querySelectorAll(".menu-item");
const closeBtns = document.querySelectorAll(".close-btn");
const body = document.querySelector("body");

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        body.classList.add("prevent-background-scroll");
    }
}

closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.closest(".popup");
        modal.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    });
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        e.target.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    }
});

// Script ROADMAP
/*
   ES6
   Forget about jQuery
*/

// Expand/Collapse Article
document.querySelectorAll("#infographic article").forEach((article) => {
   article.addEventListener("click", () => {
      article.classList.toggle("active");
   });
});

// Always Collapse Article on click outside
document.addEventListener("mouseup", (e) => {
   document.querySelectorAll("article.active").forEach((article) => {
      if (article.contains(e.target)) return;
      if (article === e.target) return;
      article.classList.remove("active");
   });
});

// Activate artciles through prev/next interactions
document.querySelectorAll("#infographic article .roadmapBtn").forEach((roadmapBtn) => {
   roadmapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      var isprev =
         e.target === e.target.parentElement.firstElementChild ? true : false;
      var article = roadmapBtn.closest("article");
      var step = parseInt(article.getAttribute("data-step"));
      var next = document.querySelector(
         `[data-step="${isprev ? step - 1 : step + 1}"]`
      );
      next.classList.add("active");
      next.scrollIntoView({
         behavior: "smooth",
         block: "nearest"
      });
   });
});
