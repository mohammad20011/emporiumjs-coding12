let body = document.querySelector("body")
let btnBlanc = document.getElementById("blanc")
let btnNoir = document.getElementById("noir")
let nav = document.querySelector("nav")
let trust1 = document.getElementById("trust1")
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
    trust1.classList.remove('navbar-light')
})

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Bouton connexion
btn.onclick = function() {
  modal.style.display = "block";
}

// Bouton fermer le modal
span.onclick = function() {
  modal.style.display = "none";
}

// Fermer le modal en cliquant en dehors
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// } 


