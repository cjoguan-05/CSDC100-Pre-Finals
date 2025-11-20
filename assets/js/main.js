console.log("Page loaded");

const backToTopBtn = document.getElementById("backToTopBtn");
const yearSpan = document.getElementById("year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

function toggleBackToTop() {
  if (!backToTopBtn) return;
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
}

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

window.addEventListener("scroll", toggleBackToTop);
toggleBackToTop();



