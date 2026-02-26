fetch("https://isat-changelog-webhook.onrender.com/changelog")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("avisos-container");
    container.innerHTML = "";

    if (!data.length) {
      container.innerHTML = "<p>* Nenhum aviso ainda.</p>";
      return;
    }

    data.forEach((aviso, i) => {
      const div = document.createElement("div");
      div.className = "aviso";

      div.innerHTML = `
        <h2>Aviso ${i + 1}</h2>
        <p>${aviso.content}</p>
        <div class="meta">${aviso.date} • ${aviso.author}</div>
      `;

      container.appendChild(div);
    });
  })
  .catch(() => {
    document.getElementById("avisos-container").innerHTML =
      "<p>* Erro ao carregar avisos.</p>";
  });
