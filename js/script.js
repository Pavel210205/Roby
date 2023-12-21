//burger-------------------------------------------------------------------------
document.querySelector('.menu__burger').addEventListener('click', () => {
    document.querySelector('.menu__burger').classList.toggle('active')
    document.querySelector('.menu__menu').classList.toggle('active')
    document.body.classList.toggle('lock')
})
//logo и фиксация меню----------------------------------------------------------
let menu = document.querySelector('.menu');
let menuLogo = document.querySelector('.menu__logo');
let header = document.querySelector('.header');
function FixedLogo() {
    if (window.scrollY > (header.offsetHeight / 2) || header.offsetWidth <= 998) {
        menu.classList.add('fixed')
        menuLogo.classList.add('position-logo')
    }
    else {
        menu.classList.remove('fixed')
        menuLogo.classList.remove('position-logo')
    }
}

function ScrollAnima() {
    let windowCenter = (window.innerHeight / 1.5) + window.scrollY;
    let animaElements = document.querySelectorAll('.title,.menu,.blog__top,.item-blog,.header__main,.header__body,.fan__flex,.improve__img,.improve__text,.improve__sub-title,.partner,.perfect__items,.perfect__body,.selected__item,.skills,.thilk__body,.talk');
    for (el of animaElements) {
        if (windowCenter > el.offsetTop) {
            el.classList.add('scroll-anima');
        }
        else {
            el.classList.remove('scroll-anima');
        }
    }
}
window.addEventListener('scroll', () => {
    FixedLogo();
    ScrollAnima();
})
window.addEventListener('resize', () => {
    FixedLogo();

})
FixedLogo();
ScrollAnima();

//indicator--------------------------------------------------------------------
let indicator = document.querySelectorAll('.skills__indicator-percent');
for (let i = 0; i < indicator.length; i++) {
    indicator[i].parentElement.insertAdjacentHTML('beforeend', `<div style="width:${indicator[i].innerHTML}"; class="skills__indicator-line"></div>`)

}
//slider01------------------------------------------------------------------------
new Swiper('.thilk__body', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 3,
    watchOverflow: true,
    autoHigth: true,
    spaceBetween: 40,
    loop: true,
    loopedSlides: 3,
    breakpoints: {
        988: {
            slidesPerView: 3,
            loopedSlides: 3,
            centeredSlides: true,
        },
        500: {
            slidesPerView: 2,
            loopedSlides: 2,
            centeredSlides: false,
        },
        0: {
            slidesPerView: 1,
            loopedSlides: 1,
            centeredSlides: true,
        },
    },
});
//---------------------------------------------------------------------------
new Swiper('.partner__body', {
    loop: true,
    allowTouchMove: false,

    autoplay: {
        delay: 0,
    },
    breakpoints: {
        700: {
            speed: 10000,
        },
        0: {
            speed: 5000,
        }
    }
})
