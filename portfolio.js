const navMenu = document.querySelector(".lista_navegacion")
const navToggle = document.querySelector(".toggle")
const menuLink = document.querySelectorAll(".lista_navegacion a")

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("lista_navegacion_visible");
})

menuLink.forEach(link =>{
    link.addEventListener("click", () =>{
        navMenu.classList.remove("lista_navegacion_visible");
    })
})