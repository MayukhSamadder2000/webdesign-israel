export const openMenu = (e) => {
  e.preventDefault();
  const menuOpen = document.querySelector("#menuOpen");
  const bigMenu = document.querySelector(".bigmenu");
  const bigmenuNav = document.querySelector(".bigmenu__nav");
  const bigMenuItem = document.querySelectorAll(".bigmenu__menu__item");
  const copyright = document.querySelector(".bigmenu__copyright");
  const navContent = document.querySelector(".nav__content");
  // document.body.style.overflow = "hidden";

  bigMenu.classList.add("transform__full");
  menuOpen.classList.add("opacity__zero");
  setTimeout(() => {
    bigmenuNav.classList.add("opacity__full");
  }, 1700);

  setTimeout(() => {
    for (let index = 0; index < bigMenuItem.length; index++) {
      bigMenuItem[index].classList.add("menu__item__in");
    }
  }, 500);
  setTimeout(() => {
    copyright.classList.add("opacity__full");
  }, 2000);
  navContent.classList.add("opacity__zero");
};

export const closeMenu = (e) => {
  const menuOpen = document.querySelector("#menuOpen");
  const bigMenu = document.querySelector(".bigmenu");
  const bigmenuNav = document.querySelector(".bigmenu__nav");
  const bigMenuItem = document.querySelectorAll(".bigmenu__menu__item");
  const copyright = document.querySelector(".bigmenu__copyright");
  const navContent = document.querySelector(".nav__content");

  setTimeout(() => {
    bigMenu.classList.remove("transform__full");
  }, 1000);

  menuOpen.classList.remove("opacity__zero");
  setTimeout(() => {
    bigmenuNav.classList.remove("opacity__full");
  }, 400);

  setTimeout(() => {
    for (let index = 0; index < bigMenuItem.length; index++) {
      bigMenuItem[index].classList.remove("menu__item__in");
    }
  }, 200);
  setTimeout(() => {
    copyright.classList.remove("opacity__full");
  }, 700);
  setTimeout(() => {
    navContent.classList.remove("opacity__zero");
  }, 1500);
  setTimeout(() => {
    // document.body.style.overflow = "auto";
  }, 1700);
};
