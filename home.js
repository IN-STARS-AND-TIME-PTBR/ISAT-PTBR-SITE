const menuButtons = [
  { text: "MEMBROS", link: "membros.html" },
  { text: "SOBRE", link: "sobre.html" },
  { text: "START AGAIN", link: "start-again" },
  { text: "ISAT", link: "isat.html" },
  { text: "WHITELIST", link: "https://store.steampowered.com/app/1677310/In_Stars_And_Time/" },
  { text: "PLANILHA", link: "https://docs.google.com/spreadsheets/d/1s8SmOxOqvIPZ4o2UXQPs3sJjHKbDJa43YuG5L1Pc6jI/edit?usp=sharing" },
  { text: "FAN ARTS", link: "fanarts.html" }
];

let currentPage = 0;
const buttonsPerPage = 4;

function renderButtons(animationClass = "") {
  const container = document.getElementById("button-slot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  container.innerHTML = "";

  const start = currentPage * buttonsPerPage;
  const end = start + buttonsPerPage;

  const visibleButtons = menuButtons.slice(start, end);

  visibleButtons.forEach(btn => {
    const a = document.createElement("a");
    a.href = btn.link;
    a.className = `btn sound-link ${animationClass}`;
    a.innerText = btn.text;
    container.appendChild(a);
  });

  prevBtn.style.visibility = currentPage === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = end >= menuButtons.length ? "hidden" : "visible";
}

function animateChange(direction) {
  const container = document.getElementById("button-slot");
  const buttons = container.querySelectorAll(".btn");

  const outClass = direction === "next" ? "slide-out-left" : "slide-out-right";
  const inClass = direction === "next" ? "slide-in-right" : "slide-in-left";

  buttons.forEach(btn => btn.classList.add(outClass));

  setTimeout(() => {
    if (direction === "next") currentPage++;
    else currentPage--;

    renderButtons(inClass);
  }, 250);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if ((currentPage + 1) * buttonsPerPage < menuButtons.length) {
    animateChange("next");
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    animateChange("prev");
  }
});

renderButtons("slide-in-right");