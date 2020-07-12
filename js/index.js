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

// //smooth scrolling
// $('#navbar a,.btn').on('click', function (e) {
//     if (this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate(
//             {
//                 scrollTop: $(hash).Offset().top - 100,
//             },
//             800
//         );
//     }
// });

