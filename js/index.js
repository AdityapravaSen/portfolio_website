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

sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0px";
    }
    else {
        sideNav.style.right = "-250px";
    }
}

