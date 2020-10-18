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

// dark mode
console.log('Its working');

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');


for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('Option clicked:', mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'css/style.css';
        document.getElementById('sidenav-logo').src = 'img/Signature-LogoBlack.png';
        document.getElementById('coding-svg').src = 'img/Website_light.png';
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'css/dark.css';
        document.getElementById('sidenav-logo').src = 'img/Signature-LogoWhite.png';
        document.getElementById('coding-svg').src = 'img/Website_dark.png';
    }

    localStorage.setItem('theme', mode);
}