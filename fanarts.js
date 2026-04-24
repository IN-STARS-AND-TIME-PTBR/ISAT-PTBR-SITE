function openLightbox(src){
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

document.querySelectorAll(".fanart-card img").forEach(img=>{
  img.addEventListener("click", ()=>{
    openLightbox(img.src);
  });
});