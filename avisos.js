const container = document.getElementById("avisos-container");

fetch("https://SEU-SERVIDOR.onrender.com/changelog")
  .then(res => res.json())
  .then(data => {

    container.innerHTML = ""; // limpa "carregando"

    if (data.length === 0) {
      container.innerHTML = "<p>* Nenhum aviso ainda.</p>";
      return;
    }

    data.reverse().forEach(aviso => {

      const card = document.createElement("div");
      card.classList.add("post-card");

      card.innerHTML = `
        <div class="post-header">
          <img src="${aviso.foto}" class="post-avatar pixel-art">
          <span class="post-name">${aviso.nome}</span>
        </div>

        <div class="post-content">
          ${aviso.mensagem}
        </div>
      `;

      container.appendChild(card);
    });

  })
  .catch(err => {
    container.innerHTML = "<p>* Erro ao carregar avisos.</p>";
    console.error(err);
  });
