const toWorksBtn = document.getElementById('toWorks');
const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const whatsAppMobile = document.getElementById('whatsapp');
const speed = document.querySelector('#speed');
const prices = document.querySelectorAll('.tariffs-content_block-footer_price-span');
const oldPrice = document.querySelectorAll('.tariffs-content_block-footer_price-old');
const oldPrices = document.querySelectorAll('.tariffs-content_block-footer_price-old-span')
const speedInput = document.querySelector('#speedInput');


const numberPrettier = (value) => {
    return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || null;
};

oldPrice.forEach((op) => {
    op.classList.add('dn');
})
const mobile = window.matchMedia("(max-width: 575.98px)");
speedInput.addEventListener('click', ()=> {
    if(speedInput.checked === true) {

        prices.forEach((p,idx) => {
            oldPrice[idx].classList.remove('dn');
            oldPrices[idx].innerHTML = p.innerText;
            p.innerText = numberPrettier(2 * parseInt(p.innerHTML.replace(' ', '')));
        })
    }
    else {
        prices.forEach((p, idx) => {
            oldPrice[idx].classList.add('dn');
            p.innerText = parseInt(p.innerHTML.replace(' ', '')) / 2;
        })
    }
})

window.addEventListener("scroll", () => {
    if(mobile.matches) {
        if (window.scrollY < 250) {
            // console.log(window.scrollY)
            whatsAppMobile.style.display = "none";
        }
        else if (window.scrollY > 2860) {
            speed.classList.add('fixed');
        }
        else {
            whatsAppMobile.style.display = "flex";
            speed.classList.remove('fixed');
        }
    }
});

menuBtn.addEventListener('click', function(){
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
        window.scrollTo(0,  670)
    }
    else {
        window.scrollTo(0,  850)
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    autoplay: true,
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
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const tabcontent = document.getElementsByClassName("tariffs-content");
const tablinks = document.getElementsByClassName("tariffs-tabs_item");

for (i = 0; i < tabcontent.length; i++) {
    // console.log(tabcontent[i])
    tabcontent[i].style.display = "none";
}

document.querySelectorAll('.tariffs-tabs_item')[0].classList.add('active');
document.getElementById("tab1").style.display = "flex";
const openTabs = (event, tab) => {

    for (i = 0; i < tabcontent.length; i++) {
        // console.log(tabcontent[i])
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "flex";
    event.currentTarget.className += " active";
}


