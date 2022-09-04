const MAIN_NAV = document.querySelector(".main-nav")
const NAV_LIST = document.querySelector(".main-nav__list")
const NAV_TOGGLE = document.querySelector(".main-nav__toggle")
const NAV_LOGO = document.querySelector(".main-nav__logo-link")
const MAP = document.querySelector(".contacts__map-frame")
const PAGE_HEADER = document.querySelector(".page_header")

const toggle_on_click = () => {
  document.body.classList.toggle("body-overflow")
  NAV_TOGGLE.classList.toggle("main-nav__toggle--closed-js")
  NAV_TOGGLE.classList.toggle("main-nav__toggle--open-js")
  NAV_LIST.classList.toggle("main-nav__list--closed-js")
  PAGE_HEADER.classList.toggle("page_header--js-menu")

  if (NAV_LOGO) {
    NAV_LOGO.classList.toggle("main-nav__logo-link--mod")
  }
}

const link_on_click = () => {
  NAV_LIST.addEventListener("click", (evt) => {
    if (evt.target.closest(".main-nav__list-link") && NAV_TOGGLE.classList.contains("main-nav__toggle--open-js")) {
      toggle_on_click()
    }
  })
}

if (MAP) {
  MAP.classList.add("contacts__map-frame--js")
}

if (NAV_TOGGLE && PAGE_HEADER && NAV_LIST && MAIN_NAV) {
  MAIN_NAV.classList.add("main-nav--js")
  NAV_LOGO.classList.remove("main-nav__logo-link--mod")
  PAGE_HEADER.classList.add("page_header--js")
  NAV_LIST.classList.add("main-nav__list--closed-js")
  NAV_LIST.classList.add("main-nav__list--js")
  NAV_TOGGLE.classList.add("main-nav__toggle--js")
  NAV_TOGGLE.classList.add("main-nav__toggle--closed-js")
  NAV_TOGGLE.classList.remove("main-nav__toggle--open-js")

  NAV_TOGGLE.addEventListener("click", toggle_on_click)

  link_on_click()
}
