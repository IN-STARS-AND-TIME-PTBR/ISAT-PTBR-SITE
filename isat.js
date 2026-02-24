// ======== PERSONAGENS ISAT ========

const personagens = [
  {
    nome: "Siffrin",
    desc: "O Viajante Estagnado. Preso em um loop temporal eterno, ele carrega sozinho o trauma de mil mortes e falhas que ninguém mais lembra. Esconde sua exaustão mental e continua, lutando para não perder a sanidade enquanto tenta desesperadamente forçar um futuro onde ele consiga sair do loop e derrotar o rei.",
    avatar: "assets/sif.png"
  },
  {
    nome: "Mirabelle",
    desc: "A Estrela de Esperança do grupo. Carrega a bênção da Mudança e a pressão imensa de ser a escolhida para salvar a vaugard, lutando para manter sua fé e otimismo enquanto esconde suas próprias inseguranças por trás de seu papel sagrado.",
    avatar: "assets/mira.png"
  },
  {
    nome: "Isabeu",
    desc: "O Coração Defensor. Um guerreiro de uma bondade inabalável que serve como a âncora emocional do time. Sob sua força física e piadas leves, esconde uma sensibilidade profunda e um desejo fervoroso de que ninguém — especialmente Siffrin — sofra sozinho.",
    avatar: "assets/isa.png"
  },
  {
    nome: "Odile",
    desc: "A Mente Analítica. Uma pesquisadora perspicaz e pragmática que valoriza o conhecimento acima de tudo. É o filtro da razão no grupo, sempre focada em desvendar a lógica do mundo e do Rei, mesmo que sua postura severa esconda um instinto protetor quase maternal.",
    avatar: "assets/odile.png"
  },
  {
    nome: "Bonnie",
    desc: "A Inocência Resiliente. O membro mais jovem e a alma do grupo. Com sua energia caótica e habilidades culinárias, Bonnie é o lembrete constante do que está em jogo, representando o futuro que o resto do time está disposto a morrer para proteger.",
    avatar: "assets/bonnie.png"
  },
  {
    nome: "Loop",
    desc: "O Reflexo Enigmático. Uma figura que observa Siffrin de longe, oferecendo dicas e sarcasmo em doses iguais enquanto o ajuda a navegar pelo tempo. Sob sua aparência brilhante e atitude às vezes cínica, Loop é o único que realmente entende o peso do isolamento de Siffrin, servindo como um espelho distorcido de tudo o que o protagonista pode se tornar.",
    avatar: "assets/loop.png"
  }
];

let pIdx = 0;

function carregarPersonagem() {
  document.getElementById("pAvatar").src = personagens[pIdx].avatar;
  document.getElementById("pNome").innerText = personagens[pIdx].nome;
  document.getElementById("pDesc").innerText = personagens[pIdx].desc;
}

function mudarPersonagem(dir) {
  pIdx += dir;

  if (pIdx < 0) pIdx = personagens.length - 1;
  if (pIdx >= personagens.length) pIdx = 0;

  carregarPersonagem();
}

// 🚀 inicializa assim que a página carrega
document.addEventListener("DOMContentLoaded", carregarPersonagem);
