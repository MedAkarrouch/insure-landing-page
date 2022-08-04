"use strict";
const navBtn = document.getElementById("nav-btn");
const navBar = document.querySelector(".header");
const links = document.querySelectorAll("a");
const sectionHero = document.querySelector(".hero");
// media queries
const media = window.matchMedia("(max-width: 700px)");

const optionDesktop = {
  root: null,
  threshold: 0,
  rootMargin: "95px 0px 0px 0px",
};

const optionMobile = {
  root: null,
  threshold: 0,
  rootMargin: "-10px 0px 0px 0px",
};

const obs = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  media.matches ? optionMobile : optionDesktop
);
obs.observe(sectionHero);
//
navBtn.addEventListener("click", function () {
  navBar.classList.toggle("nav-toggle");
});

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const section = document.querySelector(href);
      let pos = section.offsetTop;
      // pos = navBar.classList.contains("nav-toggle") ? pos - 200 : pos - 20;
      pos = navBar.classList.contains("nav-toggle") ? pos - 70 : pos - 100;
      if (navBar.classList.contains("nav-toggle"))
        pos = document.body.classList.contains("sticky") ? pos : pos - 170;
      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
    }
    // remove the navbar when we click on a button
    if (navBar.classList.contains("nav-toggle")) {
      navBar.classList.remove("nav-toggle");
    }
  });
});
