if (window.lucide) {
  window.lucide.createIcons();
}

const metricCards = document.querySelectorAll(".signal-band article, .case-card, .fit-grid article");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  metricCards.forEach((card) => observer.observe(card));
} else {
  metricCards.forEach((card) => card.classList.add("is-visible"));
}
