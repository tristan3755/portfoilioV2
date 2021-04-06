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

monParra.style.backgroundPositionY=valeur*-0.5 + 'px'
if(window.matchMedia("(min-width:800px)").matches){
monParra.style.backgroundPositionX=valeur*+0.5 + 'px'
}
})
let monParra2=document.querySelector('#competence article:nth-child(3)')
window.addEventListener('scroll',()=>{
let valeur=scrollY/15

monParra2.style.backgroundPositionY=valeur*-0.5 + 'px'
if(window.matchMedia("(min-width:800px)").matches){
  monParra2.style.backgroundPositionX=valeur*-0.5 + 'px'
  }

})


let monSpan1=document.querySelector('#competence h1 span:nth-child(1)')
let monSpan2=document.querySelector('#competence h1 span:nth-child(2)')
if(window.matchMedia("(min-width:600px)").matches){
if(monSpan1.style.width<window.innerWidth && monSpan2.style.width<window.innerWidth){
window.addEventListener('scroll',()=>{
  
    let valeur=scrollY/3
    
    monSpan1.style. width =valeur*1 + 'px'
  
    })
    
window.addEventListener('scroll',()=>{
    let valeur=scrollY/3
   
        monSpan2.style.width =valeur*1 + 'px'
    
    })
  }
}else{
  monSpan2.style.width ="70%"
  monSpan1.style. width ="70%"
}
  
    /*****************************fusée****************************/

let fusee = document.getElementById("fusee");

window.addEventListener("scroll", () => {
  let valeur = window.scrollY;

  fusee.style.bottom = valeur * 1.2 + "px";
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
/******************************menu ******************/
let maCroix=document.getElementById('croix')
let monMenu=document.getElementById('menu')

monMenu.addEventListener('click',()=>{
maCroix.style.display="flex"
monMenu.style.display="none"
home.style.display="flex"
portfolio.style.display="flex"
skills.style.display="flex"
contact.style.display="flex"
})
maCroix.addEventListener('click',()=>{
  maCroix.style.display="none"
  monMenu.style.display="flex"
  home.style.display="none"
  portfolio.style.display="none"
  skills.style.display="none"
  contact.style.display="none"
})

/***********************hover *****************/

let home=document.getElementById('home')
let legendeHome=document.querySelector('.accueil')

home.addEventListener('mouseover',()=>{
  legendeHome.style.display='flex'
  legendeHome.style.transform='translateX(-50px)'
})
home.addEventListener('mouseout',()=>{
  legendeHome.style.display='none'
})

let portfolio=document.getElementById('portfolio')
let legendePortfolio=document.querySelector('.menuPortfolio')

portfolio.addEventListener('mouseover',()=>{
  legendePortfolio.style.display='flex'
  legendePortfolio.style.transform='translateX(-50px)'
})
portfolio.addEventListener('mouseout',()=>{
  legendePortfolio.style.display='none'
})

let skills=document.getElementById('skills')
let legendeSkills=document.querySelector('.menuSkills')

skills.addEventListener('mouseover',()=>{
  legendeSkills.style.display='flex'
  legendeSkills.style.transform='translateX(-50px)'
})
skills.addEventListener('mouseout',()=>{
  legendeSkills.style.display='none'
})

let contact=document.getElementById('contact')
let legendeContact=document.querySelector('.menuContact')

contact.addEventListener('mouseover',()=>{
  legendeContact.style.display='flex'
  legendeContact.style.transform='translateX(-50px)'
})
contact.addEventListener('mouseout',()=>{
  legendeContact.style.display='none'
})
/*********************formContact *******************************/

let maCroixContact=document.getElementById('croixContact')
let contactForm=document.getElementById('contactForm')
let articles=document.querySelector('.contactArticle')
let articles1=document.querySelector('.contactArticle1')

maCroixContact.addEventListener('click',()=>{
contactForm.style.opacity="0"
contactForm.style.zIndex="0"
contactForm.style.width="0%"
articles.style.opacity='0'
articles1.style.opacity='0'
})

  let boutonContactMenu=document.getElementById('contact')
  boutonContactMenu.addEventListener('click',()=>{
  contactForm.style.opacity="1"
  contactForm.style.zIndex="50"
  contactForm.style.width="100%"
  articles.style.opacity='1'
  articles1.style.opacity='1'
  
  })