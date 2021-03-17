/****************************IntersectionObserverGlobal*************************/
let mesImages = document.querySelectorAll("img");

function lazyLoad(target) {
  let Intersection = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log("limage est rentrée");

      if (entry.isIntersecting) {
        let imagesEntrees = entry.target;
        let source = imagesEntrees.getAttribute("data-lazy");
        imagesEntrees.setAttribute("src", source);
        observer.disconnect();
      }
    });
  });

  Intersection.observe(target);
}

mesImages.forEach(lazyLoad);
/****************************IntersectionObserverGlobal*************************/



document.documentElement.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
  });


  let monParra=document.querySelector('#competence article:nth-child(1)')
window.addEventListener('scroll',()=>{
let valeur=scrollY/10

monParra.style.backgroundPositionY=valeur*-1 + 'px'

})
let monParra2=document.querySelector('#competence article:nth-child(3)')
window.addEventListener('scroll',()=>{
let valeur=scrollY/15

monParra2.style.backgroundPositionY=valeur*-1 + 'px'

})

let monSpan1=document.querySelector('#competence h1 span:nth-child(1)')
window.addEventListener('scroll',()=>{
    let valeur=scrollY/45
    
    monSpan1.style. width =valeur*1 + '%'
    
    })
    let monSpan2=document.querySelector('#competence h1 span:nth-child(2)')
window.addEventListener('scroll',()=>{
    let valeur=scrollY/45
   
        monSpan2.style.width =valeur*1 + '%'
    
    })

    /*****************************fusée****************************/

let fusee = document.getElementById("fusee");

window.addEventListener("scroll", () => {
  let valeur = window.scrollY;

  fusee.style.bottom = valeur * 0.8 + "px";
});
 /*****************************oI****************************/
let mesImagesOrdi = document.querySelectorAll("article");

if (window.matchMedia("(max-width:700px)").matches) {
  function translateImg(target) {
    let Intersection1 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let imagesEntrees1 = entry.target;
            imagesEntrees1.classList.add("animIntersectSection");
            observer.disconnect();
          }
        });
      }, {
        threshold: 0
      }
     
    );

    Intersection1.observe(target);
  }

  mesImagesOrdi.forEach(translateImg);
} else {
  function translateImg(target) {
    let Intersection1 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let imagesEntrees1 = entry.target;
            imagesEntrees1.classList.add("animIntersectSection");
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    Intersection1.observe(target);
  }

  mesImagesOrdi.forEach(translateImg);
}

/****************************chargement*************************/

let maPageChargement=document.querySelector('.chargement')
let monBody=document.querySelector('body')

window.addEventListener('load',()=>{
maPageChargement.parentElement.removeChild(maPageChargement)
monBody.style.overflowY='scroll'
})
