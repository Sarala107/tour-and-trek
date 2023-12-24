const sideNavBtn = document.querySelector(".side-nav-btn");
const sideNavcloseBtn = document.querySelector(".side-nav-close-btn");
const sideNav = document.querySelector(".side-nav");
const background = document.querySelector(".background");
const sticky = document.querySelector("header");

window.onscroll = () => {
  this.scrollY > 280
    ? sticky.classList.add("sticky")
    : sticky.classList.remove("sticky");
};

if (sideNav) {
  sideNavBtn.addEventListener("click", () => {
    sideNavBtn.classList.toggle("active");
    sideNav.classList.toggle("active");
    background.classList.toggle("active");
  });

  sideNavcloseBtn.addEventListener("click", () => {
    sideNavBtn.classList.remove("active");
    sideNav.classList.remove("active");
    background.classList.remove("active");
  });

  background.addEventListener("click", () => {
    sideNavBtn.classList.remove("active");
    sideNav.classList.remove("active");
    background.classList.remove("active");
  });
}

const filterSection = document.querySelector(".filter-section");

if (filterSection) {
  const filterOpenBtn = document.querySelector(".filter-open-btn");
  const filterCloseBtn = document.querySelector(".filter-close-btn");

  filterOpenBtn.addEventListener("click", () => {
    filterSection.classList.toggle("active");
  });

  filterCloseBtn.addEventListener("click", () => {
    filterSection.classList.remove("active");
  });
}
