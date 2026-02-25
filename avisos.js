fetch("https://isat-changelog-webhook.onrender.com/changelog")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("avisos-container");

    data.forEach((aviso, index) => {
      const box = document.createElement("div");
      box.className = "aviso";

      box.innerHTML = `
        <h2>Aviso ${index + 1}</h2>
        <p>${aviso.content}</p>
        <div class="meta">
          ${aviso.date} • ${aviso.author}
        </div>
      `;

      container.appendChild(box);
    });
  })
  .catch(err => {
    document.getElementById("avisos-container").innerHTML =
      "<p>Erro ao carregar avisos.</p>";
    console.error(err);
  });