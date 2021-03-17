document.documentElement.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
  });


  let monParra=document.querySelector('#competence article:nth-child(1)')
window.addEventListener('scroll',()=>{
let valeur=scrollY/25

monParra.style.backgroundPositionY=valeur*-1 + 'px'

})
let monParra2=document.querySelector('#competence article:nth-child(3)')
window.addEventListener('scroll',()=>{
let valeur=scrollY/25

monParra2.style.backgroundPositionY=valeur*-1 + 'px'

})

let monSpan1=document.querySelector('#competence h1 span:nth-child(1)')
window.addEventListener('scroll',()=>{
    let valeur=scrollY/55
    
    monSpan1.style. width =valeur*1 + '%'
    
    })
    let monSpan2=document.querySelector('#competence h1 span:nth-child(2)')
window.addEventListener('scroll',()=>{
    let valeur=scrollY/55
   
        monSpan2.style.width =valeur*1 + '%'
    
    })