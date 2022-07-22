const button = document.querySelector(".fa-bars")
const nav = document.querySelector(".header__link")

button.addEventListener("click", () =>{
    nav.classList.toggle("header__responsive")
})