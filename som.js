const clickSound = document.getElementById("clickSound");
const AUDIO_TIME = 1000; // 1 segundo

document.querySelectorAll(".sound-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const destino = this.getAttribute("href");

    clickSound.currentTime = 0;
    clickSound.play();

    setTimeout(() => {
      if (destino.startsWith("#")) {
        document.querySelector(destino)?.scrollIntoView({
          behavior: "smooth"
        });
      } else {
        window.location.href = destino;
      }
    }, AUDIO_TIME);
  });
});
