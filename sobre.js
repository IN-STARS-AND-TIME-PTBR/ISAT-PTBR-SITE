/* =============================
   ANIMAÇÃO DA TIMELINE
============================= */

const timeline = document.querySelector(".timeline");
const linha = document.querySelector(".timeline-linha");

if (timeline && linha) {
  const observerTimeline = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        linha.style.width = "100%";
        observerTimeline.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observerTimeline.observe(timeline);
}

/* =============================
   ANIMAÇÃO DA BARRA DE PROGRESSO
============================= */

const progresso = document.querySelector(".progresso-preenchido");

if (progresso) {
  const valor = progresso.getAttribute("data-progresso");

  const observerProgresso = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progresso.style.width = valor + "%";
        observerProgresso.disconnect();
      }
    });
  }, { threshold: 0.6 });

  observerProgresso.observe(progresso);
}