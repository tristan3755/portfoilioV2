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

/*******************************competence ****************************/

let hoverHtml = document.querySelector(".hoverHtml");

function monHoverHtml() {
  hoverHtml.style.top = "0";
  hoverHtml.style.width = "25%";
  hoverHtml.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverHtml.addEventListener("click", () => {
    monHoverHtml();
  });
}

let hoverCSS = document.querySelector(".hoverCss");

function monHoverCSS() {
  hoverCSS.style.top = "0";
  hoverCSS.style.width = "25%";
  hoverCSS.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverCSS.addEventListener("click", () => {
    monHoverCSS();
  });
}

let hoverJs = document.querySelector(".hoverJs");

function monHoverJs() {
  hoverJs.style.top = "0";
  hoverJs.style.width = "25%";
  hoverJs.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverJs.addEventListener("click", () => {
    monHoverJs();
  });
}
let hoverPhp = document.querySelector(".hoverPhp");

function monHoverPhp() {
  hoverPhp.style.top = "0";
  hoverPhp.style.width = "25%";
  hoverPhp.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverPhp.addEventListener("click", () => {
    monHoverPhp();
  });
}

let threeJs = document.querySelector(".threeJs");

function monHoverThree() {
  threeJs.style.top = "0";
  threeJs.style.width = "25%";
  threeJs.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  threeJs.addEventListener("click", () => {
    monHoverThree();
  });
}
let blenderHover = document.querySelector(".blenderHover");

function monHoverBlender() {
  blenderHover.style.top = "0";
  blenderHover.style.width = "25%";
  blenderHover.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  blenderHover.addEventListener("click", () => {
    monHoverBlender();
  });
}
let hoverAdobeIll = document.querySelector(".hoverAdobeIll");

function monHoverIll() {
  hoverAdobeIll.style.top = "0";
  hoverAdobeIll.style.width = "25%";
  hoverAdobeIll.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverAdobeIll.addEventListener("click", () => {
    monHoverIll();
  });
}
let hoverAdobePs = document.querySelector(".hoverAdobePs");

function monHoverPs() {
  hoverAdobePs.style.top = "0";
  hoverAdobePs.style.width = "25%";
  hoverAdobePs.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverAdobePs.addEventListener("click", () => {
    monHoverPs();
  });
}
let mySql = document.querySelector(".mySql");

function monHoverSql() {
  mySql.style.top = "0";
  mySql.style.width = "25%";
  mySql.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  mySql.addEventListener("click", () => {
    monHoverSql();
  });
}

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
/*********************formContact *******************************/

let maCroixContact=document.getElementById('croixContact')
let contactForm=document.getElementById('contactForm')

maCroixContact.addEventListener('click',()=>{
contactForm.style.opacity="0"
contactForm.style.zIndex="0"
contactForm.style.width="0%"
})
let boutonContact=document.querySelector('.contactMe')
boutonContact.addEventListener('click',()=>{
  contactForm.style.opacity="1"
  contactForm.style.zIndex="50"
  contactForm.style.width="100%"
  })

  let boutonContactMenu=document.getElementById('contact')
  boutonContactMenu.addEventListener('click',()=>{
  contactForm.style.opacity="1"
  contactForm.style.zIndex="50"
  contactForm.style.width="100%"
  })