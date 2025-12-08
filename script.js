// play click sound on any <a> or .btn click
const clickSound = document.getElementById("clickSound");
if (clickSound) {
  document.querySelectorAll("a, .btn, button").forEach(el => {
    el.addEventListener("click", (e) => {
      // some anchors navigate away instantly; reset time and try play
      try {
        clickSound.currentTime = 0;
        clickSound.play().catch(()=>{/* play blocked by browser until user interaction */});
      } catch (err){
        // ignore
      }
    });
  });
}

// small accessibility: if user prefers reduced motion -> stop overlay animation
const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
if (mq.matches) {
  const ov = document.querySelector(".overlay-animated");
  if (ov) ov.style.animation = "none";
}

