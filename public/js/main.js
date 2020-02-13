let body = document.querySelector("body")
let btnBlanc = document.getElementById("blanc")
let btnNoir = document.getElementById("noir")

btnBlanc.addEventListener("click", ()=>{
    body.style.backgroundColor = "white"
    body.style.color = "black"
})
btnNoir.addEventListener("click", ()=>{
    body.style.backgroundColor = "black"
    body.style.color = "white"
})