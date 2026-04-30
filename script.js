// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// MODAL
function openModal(text) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalText").innerText = text;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});