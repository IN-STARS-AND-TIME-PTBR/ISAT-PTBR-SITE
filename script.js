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
    funcao: "Dono / Tradutor Principal",
    avatar: "https://cdn.discordapp.com/avatars/926595414021533726/95f7c8098c3b8f54b9e60afd34d896ff.png"
  },
  {
    nome: "lowneta",
    funcao: "Tradutora",
    avatar: "https://cdn.discordapp.com/avatars/412626853510250497/78ab8417be17cdd7fcbb4ed159733d04.png?size=1024"
  },
  {
    nome: "ellie",
    funcao: "Revisora",
    avatar: "https://cdn.discordapp.com/avatars/561318349678706688/687ce5118ad8cdb72064f0e8e0e54692.png"
  },
  {
    nome: "starmio",
    funcao: "Revisora",
    avatar: "https://cdn.discordapp.com/avatars/722986991184248862/955a45b39c585fd2d3e6daa3eb5e3402.png"
  },
  {
    nome: "kirbo",
    funcao: "Revisor",
    avatar: "https://cdn.discordapp.com/avatars/353245192947630090/2cb3bd72316a819f792ba64c09933661.png"
  },
  {
    nome: "tapioka",
    funcao: "Admin",
    avatar: "https://cdn.discordapp.com/avatars/1017067650234458183/e31b94205a5c66deb6b8364213aa2236.png"
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

