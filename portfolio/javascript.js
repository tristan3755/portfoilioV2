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
/**********************************************************************interObjet*****************************************************/

/*******************************portfolio**********************************************/

let monPortfolio = [
    {
      image: "./images/community.jpg",
      lien: "./sitesPortfolio/anim/index.html",
      description:
        "Site réalisé pour l'agence web Community à Nancy lors de mon Stage de fin d'étude",
    },
  
    {
      image: "./images/gantColor.jpg",
      lien: "./sitesPortfolio/batiment/index.html",
      description:
        "Site réalisé pour l'agence web Community à Nancy lors de mon Stage de fin d'étude",
    },
  
    {
      image: "./images/liberty.jpg",
      lien: "./sitesPortfolio/integration web/index.html",
      description: "Site réalisé en travaux dirigés lors de mes études",
    },
  ];
  
  for (let i in monPortfolio) {
    let monBloc = document.createElement("article");
    monBloc.style.position = "relative";
    let monBlocDescription = document.createElement("div");
    monBlocDescription.classList.add("divHover");
    let maDescription = document.createElement("p");
    maDescription.innerHTML = monPortfolio[i].description;
    maDescription.style.fontFamily = "Bangers, cursive";
    maDescription.style.color = "white";
    maDescription.style.textAlign = "center";
    maDescription.style.fontSize = "80%";
    maDescription.style.letterSpacing = "2px";
    maDescription.style.lineHeight = "25px";
    monBlocDescription.appendChild(maDescription);
    monBloc.appendChild(monBlocDescription);
    let monImage = document.createElement("img");
    monImage.src = monPortfolio[i].image;
    monImage.style.position = "absolute";
    monImage.style.height = "100%";
    monImage.style.width = "100%";
    monImage.style.objectFit = "cover";
    monImage.style.borderRadius = "2px";
  
    monImage.addEventListener("click", lienPortfolio(i));
    monBlocDescription.addEventListener("click", lienPortfolio(i));
  
    monBloc.appendChild(monImage);
  
    document.getElementById("portfolio").appendChild(monBloc);
  
    function lienPortfolio(liens) {
      return function () {
        window.open(monPortfolio[liens].lien);
      };
    }
  }
  
  let monPortfolio2 = [
    {
      image2: "./images/organiz.jpg",
      lien2: "./sitesPortfolio/projetDiplome/index.html",
      description2:
        "Première page réalisée dans l'optique d'un projet d'une application web de gestion de facture",
    },
  
    {
      image2: "./images/the.jpg",
      lien2: "./sitesPortfolio/site de thé/index.html",
      description2: "Site réalisé pour un projet fictif de site de thé",
    },
    {
      image2: "./images/meteo.jpg",
      lien2: "./sitesPortfolio/apiMeteo/index.html",
      description2:
        "Application web météo réalisée grace à l'interrogation en AJAX d'une API REST",
    },
  ];
  
  for (let i in monPortfolio2) {
    let monBloc2 = document.createElement("article");
    monBloc2.style.position = "relative";
    monBloc2.style.marginTop = "2px";
    monBloc2.style.marginBottom = "2px";
    let monBlocDescription2 = document.createElement("div");
    monBlocDescription2.classList.add("divHover");
    let maDescription2 = document.createElement("p");
    maDescription2.innerHTML = monPortfolio2[i].description2;
    maDescription2.style.fontFamily = "Bangers, cursive";
    maDescription2.style.color = "white";
    maDescription2.style.textAlign = "center";
    maDescription2.style.fontSize = "80%";
    maDescription2.style.letterSpacing = "2px";
    maDescription2.style.lineHeight = "25px";
    monBlocDescription2.appendChild(maDescription2);
    monBloc2.appendChild(monBlocDescription2);
    let monImage2 = document.createElement("img");
    monImage2.src = monPortfolio2[i].image2;
    monImage2.style.position = "absolute";
    monImage2.style.height = "100%";
    monImage2.style.width = "100%";
    monImage2.style.objectFit = "cover";
    monImage2.style.borderRadius = "2px";
  
    monImage2.addEventListener("click", lienPortfolio2(i));
    monBlocDescription2.addEventListener("click", lienPortfolio2(i));
  
    monBloc2.appendChild(monImage2);
  
    document.getElementById("portfolio2").appendChild(monBloc2);
  
    function lienPortfolio2(liens2) {
      return function () {
        window.open(monPortfolio2[liens2].lien2);
      };
    }
  }

  /****************************portfolio*****************************************/
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

let portfolio=document.getElementById('portfolioMenu')
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

/****************************************canvas *************************************************/
