const container = document.getElementById("avisos-container");

fetch("https://isat-changelog-webhook.onrender.com/changelog")
  .then(res => res.json())
  .then(data => {

    container.innerHTML = "";

    if (!data || data.length === 0) {
      container.innerHTML = "<p>* Nenhum aviso ainda.</p>";
      return;
    }

    data.reverse().forEach(aviso => {

      const card = document.createElement("div");
      card.classList.add("post-card");

      card.innerHTML = `
        <div class="post-header">
          <img src="assets/avatar-exemplo.png" class="post-avatar pixel-art">
          <div class="post-user">
            <span class="post-name">Felyzito</span>
          </div>
        </div>

        <div class="post-content">
          ${marked.parse(aviso.content)}
        </div>
      `;

      container.appendChild(card);
    });

  })
  .catch(err => {
    container.innerHTML = "<p>* Erro ao carregar avisos.</p>";
    console.error(err);
  });
