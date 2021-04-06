/****************************chargement*************************/

let maPageChargement=document.querySelector('.chargement')
let monBody=document.querySelector('body')

window.addEventListener('load',()=>{
maPageChargement.parentElement.removeChild(maPageChargement)
monBody.style.overflowY='scroll'
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
let boutonContact=document.querySelector('.contactMenu')
boutonContact.addEventListener('click',()=>{
  contactForm.style.opacity="1"
  contactForm.style.zIndex="50"
  contactForm.style.width="100%"
  articles.style.opacity='1'
  articles1.style.opacity='1'



  })

 