const NAVLIST = document.querySelector(".main-nav__list")
const NAVTOGGLE = document.querySelector(".main-nav__toggle")
const NAVLOGO = document.querySelector(".main-nav__logo-link")
const MAP = document.querySelector(".contacts__map-frame")
const PAGEHEADER = document.querySelector(".page_header")

if (MAP) {
  MAP.classList.add("contacts__map-frame--js")
}

if (NAVTOGGLE) {

  if (NAVLOGO) {
    NAVLOGO.classList.remove("main-nav__logo-link--mod")
  }

  if (PAGEHEADER) {
    PAGEHEADER.classList.add("page_header--js")
  }

  if (NAVLIST) {
    NAVLIST.classList.add("main-nav__list--closed-js")
  }

  NAVTOGGLE.classList.add("main-nav__toggle--js")
  NAVTOGGLE.classList.add("main-nav__toggle--closed-js")
  NAVTOGGLE.classList.remove("main-nav__toggle--open-js")

  NAVTOGGLE.addEventListener("click", () => {
    NAVTOGGLE.classList.toggle("main-nav__toggle--closed-js")
    NAVTOGGLE.classList.toggle("main-nav__toggle--open-js")

    if (NAVLIST) {
      NAVLIST.classList.toggle("main-nav__list--closed-js")
    }
    if (NAVLOGO) {
      NAVLOGO.classList.toggle("main-nav__logo-link--mod")
    }
  })
}
