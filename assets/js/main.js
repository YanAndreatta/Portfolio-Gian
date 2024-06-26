/* ================= Start aos animation =================*/
AOS.init();

/* ================= NavBAR =================*/
let navbar = document.querySelector('#navbar');

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})

/* ================= Swiper Testimonials =================*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
})

/* ================= NavBAR =================*/
let bars = document.querySelector("#bars")
let nav = document.querySelector("#nav")
let nav_links = document.querySelectorAll("#nav a")

bars.addEventListener("click", () => {
    nav.classList.toggle("show")
})
nav_links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.toggle("show")
    })
})

/* ================= Typed Js =================*/
var options = {
    strings: ['Quality Assurance', 'Automated Test Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: true,
}

var typed = new Typed('#element', options);