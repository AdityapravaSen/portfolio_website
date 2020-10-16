//responsive nav
//Responsive nav
let menuBtn = document.getElementById("menu-btn");
let sideNav = document.getElementById("side-nav");
let navLinks = document.querySelectorAll(".nav-links li");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
    if (sideNav.style.left == "-250px") {
        sideNav.style.left = "0px";
    }
    else {
        sideNav.style.left = "-250px";
    }
}