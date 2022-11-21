
const toWorksBtn = document.getElementById('toWorks');
const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const whatsAppMobile = document.getElementById('whatsapp');

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollHeight)
const mobile = window.matchMedia("(max-width: 575.98px)");

window.addEventListener("scroll", () => {
    if(mobile.matches) {
        if(window.scrollY > 550 && window.scrollY < 1900) {
            console.log(window.scrollY)
            whatsAppMobile.style.display = "flex";
        }
        else {
            whatsAppMobile.style.display = "none";
        }
    }
});
if(mobile.matches) {
    console.log('whatsapp fixed')
}

menuBtn.addEventListener('click', function(){
    console.log('clicked')
    document.body.style.overflow = document.body.style.overflow ? null : 'hidden';
    menu.classList.toggle('active');
})

let menuItem = document.querySelectorAll('.menu-list_item');

menuItem.forEach((m) => {
    m.addEventListener('click', ()=>{
        menu.classList.remove('active');
        document.body.style.overflow =  null;
    })
})

toWorksBtn.addEventListener("click", ()=> {
    const mobile = window.matchMedia("(max-width: 700px)");
    if(mobile.matches) {
        window.scrollTo(0,  750)
    }
    else {
        window.scrollTo(0,  850)
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
