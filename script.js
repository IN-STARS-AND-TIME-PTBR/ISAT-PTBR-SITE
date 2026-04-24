const clickSound = document.getElementById("clickSound");

document.querySelectorAll("a, button, .btn").forEach(el=>{
  el.addEventListener("click",()=>{
    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});
  });
});

// ======== MEMBROS ========

const membros = [
  {
    nome: "Felyzito",
    funcao: "Tradutor",
    status: "Ativo",
    avatar: "https://i.imgur.com/5hrrIfu.png"
  },
  {
    nome: "Starmio",
    funcao: "Tradutora",
    status: "Ativa",
    avatar: "https://i.imgur.com/E45eIq1.png"
  },
  {
    nome: "Crepioka",
    funcao: "Tradutor",
    status: "Ativo",
    avatar: "https://i.imgur.com/IMc7U5T.png"
  },
  {
    nome: "Nervous charlotte",
    funcao: "Tradutora",
    status: "Ativa",
    avatar: "https://i.imgur.com/J1fZXTi.png"
  },
  {
    nome: "Ramdom person",
    funcao: "Tradutor",
    status: "Ativo",
    avatar: "https://i.imgur.com/o4eF95O.png"
  },
  {
    nome: "Tales",
    funcao: "Ajudante",
    status: "Ativo",
    avatar: "https://i.imgur.com/hsWfrYM.png"
  },
  {
    nome: "The Butler",
    funcao: "Ajudante",
    status: "Ativo",
    avatar: "https://i.imgur.com/fkbhTf1.png"
  },
  {
    nome: "Ale.",
    funcao: "Tradutor",
    status: "Casual",
    avatar: "https://i.imgur.com/jpGzydR.png"
  },
  {
    nome: "Lowneta",
    funcao: "Tradutora e Coordenadora Geral",
    status: "Recesso",
    avatar: "https://i.imgur.com/vAUJ45P.png"
  },
  {
    nome: "carolana01",
    funcao: "Tradutora",
    status: "Recesso",
    avatar: "https://i.imgur.com/5EqugcX.png"
  },
  {
    nome: "May mega",
    funcao: "Tradutora",
    status: "Recesso",
    avatar: "https://i.imgur.com/smKRkwx.png"
  }
];

let idx = 0;

function carregarMembro(){
  const membro = membros[idx];

  document.getElementById("mAvatar").src = membro.avatar;
  document.getElementById("mNome").innerText = membro.nome;
  document.getElementById("mFuncao").innerText = membro.funcao;
  document.getElementById("mStatus").innerText = membro.status;
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