let monBouton=document.querySelector(".bouton2")
let phone=document.getElementById("phone")
let mail=document.getElementById("mail")
let div1=document.querySelector(".div1")
let div2=document.querySelector(".div2")



monBouton.addEventListener('click',()=>{
    if(monBouton.style.left<="0%"){
    monBouton.style.left="30%"
    mail.style.color="white"
    phone.style.color="#f8d50c"
    div1.style.backgroundImage="url(none)"
    div2.style.backgroundImage="url(./images/contact.jpg)"
    }else if(monBouton.style.left>="30%"){
        monBouton.style.left="0%"
        mail.style.color="#f8d50c"
        phone.style.color="white"
        div1.style.backgroundImage="url(./images/mail.jpg)"
        div2.style.backgroundImage="url(none)"
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

