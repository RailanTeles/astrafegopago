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
// const toggle = document.querySelector(".toggle");
// const navBar = document.querySelector(".NavBarMobile");
// const navBarCont = document.querySelector(".NavBarMobileContent");
// const toggleImg = document.querySelector("#toggleIMG");

// toggle.addEventListener('click', ()=>{
//     navBar.classList.toggle("OnNavBar");

    
//     toggle.style.transition = "transform 0.3s ease"; 
//     toggle.style.transform = "rotate(360deg)"; 

//     setTimeout(() => {
//         toggle.style.transform = "rotate(0deg)"; 
//         if (navBar.classList.contains("OnNavBar")) {
//             toggleImg.src = "src/images/close.png"
//         } else {
//             toggleImg.src = "src/images/toggle.png"
//         }
//     }, 500); 
// });

const itensNavBarMobile = document.querySelectorAll(".NavItensMobile");

itensNavBarMobile.forEach(item => {
    item.addEventListener('click', () => {
        setTimeout(() => {
            navBar.classList.remove("OnNavBar");
            toggleImg.src = "src/images/toggle.png";
        }, 500);
    });
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