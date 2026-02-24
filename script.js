const clickSound = document.getElementById("clickSound");
document.querySelectorAll("a, button, .btn").forEach(el=>{
  el.addEventListener("click",()=>{
    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});
  })
});

// ======== MEMBROS ========

const membros = [
  {
    nome: "fely_in",
    funcao: "Dono",
    avatar: "hhttps://i.imgur.com/SDqgZMu.png"
  },
  {
    nome: "lowneta",
    funcao: "Tradutora/Programadora",
    avatar: "https://i.imgur.com/vAUJ45P.png"
  },
  {
    nome: "ellie",
    funcao: "Revisora/tradutora",
    avatar: "https://i.imgur.com/1wxrYm2.png"
  },
  {
    nome: "starmio",
    funcao: "Revisora/tradutora/Organização das Planilhas",
    avatar: "https://i.imgur.com/E45eIq1.png"
  },
  {
    nome: "kirbo",
    funcao: "Revisor/Tradutor",
    avatar: "https://i.imgur.com/B7mrGJw.png"
  },
  {
    nome: "tapioka",
    funcao: "Admin",
    avatar: "https://i.imgur.com/IMc7U5T.png"
  },
  {
    nome: "Ale",
    funcao: "Tradutora",
    avatar: "https://i.imgur.com/jpGzydR.png"
  }
];

let idx = 0;

function carregarMembro(){
  document.getElementById("mAvatar").src = membros[idx].avatar;
  document.getElementById("mNome").innerText = membros[idx].nome;
  document.getElementById("mFuncao").innerText = membros[idx].funcao;
}

function mudarMembro(dir){
  idx += dir;
  if(idx < 0) idx = membros.length - 1;
  if(idx >= membros.length) idx = 0;
  carregarMembro();
}

if(window.location.href.includes("membros.html")){
  carregarMembro();
}


