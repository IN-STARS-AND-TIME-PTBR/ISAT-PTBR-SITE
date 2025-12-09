// CLICK SOUND
const clickSound = document.getElementById("clickSound");
if (clickSound) {
  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    });
  });
}

// REDUZIR ANIMAÇÃO SE O USUÁRIO FORCE
const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
if (mq.matches) {
  const ov = document.querySelector(".overlay-animated");
  if (ov) ov.style.animation = "none";
}

// ==========================
// SISTEMA DE MEMBROS
// ==========================
const membros = [
  {
    nome: "fely_in",
    cargo: "Dono / Tradutor Principal",
    pronome: "ele/dele",
    foto: "https://cdn.discordapp.com/avatars/926595414021533726/95f7c8098c3b8f54b9e60afd34d896ff.png"
  },
  {
    nome: "lowneta",
    cargo: "Tradutor",
    pronome: "ele/dele",
    foto: "https://cdn.discordapp.com/avatars/412626853510250497/78ab8417be17cdd7fcbb4ed159733d04.png"
  },
  {
    nome: "ellie",
    cargo: "Tradutora",
    pronome: "ela/dela",
    foto: "https://cdn.discordapp.com/avatars/561318349678706688/687ce5118ad8cdb72064f0e8e0e54692.png"
  },
  {
    nome: "starmio",
    cargo: "Revisor(a)",
    pronome: "ele/ela",
    foto: "https://cdn.discordapp.com/avatars/722986991184248862/955a45b39c585fd2d3e6daa3eb5e3402.png"
  },
  {
    nome: "kirbo",
    cargo: "Revisor",
    pronome: "ele/dele",
    foto: "https://cdn.discordapp.com/avatars/353245192947630090/2cb3bd72316a819f792ba64c09933661.png"
  },
  {
    nome: "tapioka",
    cargo: "Administrador",
    pronome: "ele/dele",
    foto: "https://cdn.discordapp.com/avatars/1017067650234458183/e31b94205a5c66deb6b8364213aa2236.png"
  }
];

let indexAtual = 0;

function atualizarMembro() {
  const m = membros[indexAtual];
  document.getElementById("membroFoto").src = m.foto;
  document.getElementById("membroNome").textContent = m.nome;
  document.getElementById("membroCargo").textContent = m.cargo;
  document.getElementById("membroPronome").textContent = m.pronome;
}

const prev = document.getElementById("prev");
const next = document.getElementById("next");

if (prev && next) {
  prev.addEventListener("click", () => {
    indexAtual = (indexAtual - 1 + membros.length) % membros.length;
    atualizarMembro();
  });
  next.addEventListener("click", () => {
    indexAtual = (indexAtual + 1) % membros.length;
    atualizarMembro();
  });

  atualizarMembro();
}
