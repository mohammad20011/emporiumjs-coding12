let body = document.querySelector("body")
let btnBlanc = document.getElementById("blanc")
let btnNoir = document.getElementById("noir")
let nav = document.querySelector("nav")
btnBlanc.addEventListener("click", ()=>{
    body.style.backgroundColor = "white"
    body.style.color = "black"
    nav.classList.remove('navbar-dark')
    nav.classList.add('navbar-light')
})
btnNoir.addEventListener("click", ()=>{
    body.style.backgroundColor = "black"
    body.style.color = "white"
    nav.classList.remove('navbar-light')
    nav.classList.add('navbar-dark')
})

let h5 = document.getSelection