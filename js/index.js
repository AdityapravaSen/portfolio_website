//navbar
const navbar = document.getElementById('navbar');
let scroll = false;

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scroll) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scroll = true;
        }, 200);
    }
    else {
        navbar.classList.add('top');
        scroll = false;
    }
}

//Responsive nav
let menuBtn = document.getElementById("menu-btn");
let sideNav = document.getElementById("side-nav");
let navLinks = document.querySelectorAll(".nav-links li");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0px";
    }
    else {
        sideNav.style.right = "-250px";
    }

    //animation
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade ease ${index / 5 + 1.2}s`;
        }
    });
}

//image slider
var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
    next("next");
}
prevSlide.onclick = function () {
    next("prev");
}

function next(direction) {

    if (direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    }
    else {
        if (index == 0) {
            index = totalSlides - 1;
        }
        else {
            index--;
        }
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}

