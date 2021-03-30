



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
