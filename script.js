// play click sound on any <a> or .btn click
const clickSound = document.getElementById("clickSound");
if (clickSound) {
  document.querySelectorAll("a, .btn, button").forEach(el => {
    el.addEventListener("click", (e) => {
      try {
        clickSound.currentTime = 0;
        clickSound.play().catch(()=>{/* play blocked by browser until user interaction */});
      } catch (err){
        // ignore
      }
    });
  });
}

// small accessibility: if user prefers reduced motion -> stop overlay animation
const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
if (mq.matches) {
  const ov = document.querySelector(".overlay-animated");
  if (ov) ov.style.animation = "none";
}

/* ===============================
   SISTEMA DE MEMBROS — automático
================================ */

const membros = [
    {
        nome: "ellie",
        cargo: "Tradutor",
        pronomes: "ela/dela",
        id: "561318349678706688",
        hash: "687ce5118ad8cdb72064f0e8e0e54692"
    },
    {
        nome: "tapioka",
        cargo: "Administrador",
        pronomes: "ele/dele",
        id: "1017067650234458183",
        hash: "e31b94205a5c66deb6b8364213aa2236"
    },
    {
        nome: "kirbo",
        cargo: "Revisor",
        pronomes: "ele/dele",
        id: "353245192947630090",
        hash: "2cb3bd72316a819f792ba64c09933661"
    },
    {
        nome: "lowneta",
        cargo: "Tradutor",
        pronomes: "ele/dele",
        id: "412626853510250497",
        hash: "78ab8417be17cdd7fcbb4ed159733d04"
    },
    {
        nome: "starmio",
        cargo: "Revisor",
        pronomes: "ele/ela",
        id: "722986991184248862",
        hash: "955a45b39c585fd2d3e6daa3eb5e3402"
    },
    {
        nome: "fely_in",
        cargo: "Dono / Tradutor Principal",
        pronomes: "ele/dele",
        id: "926595414021533726",
        hash: "95f7c8098c3b8f54b9e60afd34d896ff"
    }
];

let indexMembro = 0;

function atualizarMembro() {
    const m = membros[indexMembro];
    const foto = `https://cdn.discordapp.com/avatars/${m.id}/${m.hash}.png?size=1024`;

    const imgEl = document.getElementById("membroFoto");
    const nomeEl = document.getElementById("membroNome");
    const cargoEl = document.getElementById("membroCargo");
    const pronEl = document.getElementById("membroPronomes");

    if (imgEl) imgEl.src = foto;
    if (nomeEl) nomeEl.textContent = m.nome;
    if (cargoEl) cargoEl.textContent = m.cargo;
    if (pronEl) pronEl.textContent = m.pronomes;
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn) prevBtn.addEventListener("click", () => {
    indexMembro = (indexMembro - 1 + membros.length) % membros.length;
    atualizarMembro();
    // play click
    try{ clickSound.currentTime=0; clickSound.play(); }catch(e){}
});

if (nextBtn) nextBtn.addEventListener("click", () => {
    indexMembro = (indexMembro + 1) % membros.length;
    atualizarMembro();
    try{ clickSound.currentTime=0; clickSound.play(); }catch(e){}
});

// Inicializa o primeiro membro assim que a página carrega
document.addEventListener("DOMContentLoaded", atualizarMembro);
