const clickSound = document.getElementById("clickSound");

document.querySelectorAll(".sound-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // impede a troca imediata da página

    const destino = this.getAttribute("href");

    clickSound.currentTime = 0;
    clickSound.play();

    // espera o som acabar antes de navegar
    setTimeout(() => {
      window.location.href = destino;
    }, clickSound.duration * 1000);
  });
});