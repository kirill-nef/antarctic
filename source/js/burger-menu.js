const navList = document.querySelector(".main-nav__list")
const navToggle = document.querySelector(".main-nav__toggle")
const navLogo = document.querySelector(".main-nav__logo-link")

const pageHeader = document.querySelector(".page_header")

navLogo.classList.remove("main-nav__logo-link--mod")
pageHeader.classList.add("page_header--js")

navToggle.classList.add("main-nav__toggle--js")
navToggle.classList.add("main-nav__toggle--closed-js")
navToggle.classList.remove("main-nav__toggle--open-js")

navList.classList.add("main-nav__list--closed-js")

navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("main-nav__toggle--closed-js")
    navToggle.classList.toggle("main-nav__toggle--open-js")
    navList.classList.toggle("main-nav__list--closed-js")
    navLogo.classList.toggle("main-nav__logo-link--mod")
})
