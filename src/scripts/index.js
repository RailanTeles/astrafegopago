// Animação de observar
const observers = document.querySelectorAll('.observer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.7 
});

observers.forEach((element) => observer.observe(element));

// NavBar
const toggle = document.querySelector(".toggle");
const navBar = document.querySelector(".NavBarMobile");
const navBarCont = document.querySelector(".NavBarMobileContent");
const toggleImg = document.querySelector("#toggleIMG");
const overlay = document.querySelector(".overlay");

toggle.addEventListener('click', ()=>{
    navBar.classList.add("OnNavBar");
    overlay.classList.add("OnOverlay");
});

const itensNavBarMobile = document.querySelectorAll(".NavItensMobile");

itensNavBarMobile.forEach(item => {
    item.addEventListener('click', () => {
            navBar.classList.remove("OnNavBar");
            overlay.classList.remove("OnOverlay");
    });
});

overlay.addEventListener('click', ()=>{
    navBar.classList.remove("OnNavBar");
    overlay.classList.remove("OnOverlay");
});


// Imagem
document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("anuncie-image");

  function updateImageSrc() {
      if (window.innerWidth <= 700) {
          img.src = "src/images/Tecno_image_mobile.png"; 
      } else {
          img.src = "src/images/Tecno_image.png"; 
      }
  }

  updateImageSrc();

  window.addEventListener("resize", updateImageSrc);
});