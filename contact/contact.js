let monBouton=document.querySelector(".bouton2")
let phone=document.getElementById("phone")
let mail=document.getElementById("mail")
let div1=document.querySelector(".div1")
let div2=document.querySelector(".div2")

window.addEventListener('load',()=>{
    div2.innerHTML="contactez moi par mail à l'adresse tristan3755@gmail.com ou en cliquant sur l'icone"
})

monBouton.addEventListener('click',()=>{
    if(monBouton.style.left<="0%"){
    monBouton.style.left="30%"
    mail.style.color="white"
    phone.style.color="#f8d50c"
    div1.style.backgroundImage="url(none)"
    div1.innerHTML="contactez moi par téléphone au 0771822320 ou en cliquant sur l'icone"
    div2.innerHTML=""
    div2.style.backgroundImage="url(./images/contact.jpg)"
    }else if(monBouton.style.left>="30%"){
        monBouton.style.left="0%"
        mail.style.color="#f8d50c"
        phone.style.color="white"
        div1.style.backgroundImage="url(./images/mail.jpg)"
        div1.innerHTML=""
        div2.style.backgroundImage="url(none)"
        div2.innerHTML="contactez moi par mail à l'adresse tristan3755@gmail.com ou en cliquant sur l'icone"
    }
})

let monTrou=document.querySelector(".trou")
monBouton.addEventListener('click',()=>{
    if(monBouton.style.left<="0%"){
        monTrou.style.left="60%"
        }else if(monBouton.style.left>="30%"){
            monTrou.style.left="40%"
        }
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
/****************************chargement*************************/

let maPageChargement=document.querySelector('.chargement')
let monBody=document.querySelector('body')

window.addEventListener('load',()=>{
maPageChargement.parentElement.removeChild(maPageChargement)
monBody.style.overflowY='scroll'
})
