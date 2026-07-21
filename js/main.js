// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// FAQ: fecha os outros ao abrir um
document.querySelectorAll(".faq__item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq__item[open]").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

// Duplica trilha da faixa para loop contínuo do marquee
const track = document.querySelector(".strip__track");
if (track) track.innerHTML += track.innerHTML;
