// ======== PERSONAGENS ISAT ========

const personagens = [
  {
    nome: "Siffrin",
    desc: "Protagonista da história. Preso em um loop temporal, carrega o peso do mundo enquanto tenta manter a esperança.",
    avatar: "assets/placeholder.png"
  },
  {
    nome: "Personagem 2",
    desc: "Descrição temporária do personagem.",
    avatar: "assets/placeholder.png"
  },
  {
    nome: "Personagem 3",
    desc: "Descrição temporária do personagem.",
    avatar: "assets/placeholder.png"
  }
];

let pIdx = 0;

function carregarPersonagem(){
  document.getElementById("pAvatar").src = personagens[pIdx].avatar;
  document.getElementById("pNome").innerText = personagens[pIdx].nome;
  document.getElementById("pDesc").innerText = personagens[pIdx].desc;
}

function mudarPersonagem(dir){
  pIdx += dir;
  if(pIdx < 0) pIdx = personagens.length - 1;
  if(pIdx >= personagens.length) pIdx = 0;
  carregarPersonagem();
}

if(window.location.href.includes("isat.html")){
  carregarPersonagem();
}