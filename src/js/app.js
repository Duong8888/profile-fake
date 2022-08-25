
var bgCheck = document.querySelector('#bg');
var btn = document.querySelectorAll('.material-symbols-outlined.click');
var dark = document.querySelector('.dark');
var backTop = document.querySelector('.back-top');
var light = document.querySelector('.light');
var bg = localStorage.getItem('color');

document.documentElement.setAttribute('theme-color', bg);
if (bg == 'dark') {
    bgCheck.checked = true;
}
for (let item of btn) {
    item.addEventListener('click', function () {
        if (bgCheck.checked == false) {
            localStorage.setItem('color', 'dark');
            var bg = localStorage.getItem('color');
            document.documentElement.setAttribute('theme-color', bg);
        } else {
            localStorage.setItem('color', 'light');
            var bg = localStorage.getItem('color');
            document.documentElement.setAttribute('theme-color', bg);
        }
    });
}


// header
var header = document.querySelector('header')
window.addEventListener('scroll', function () {
    var bg = localStorage.getItem('color');
    if (document.documentElement.getClientRects()[0].top < 0 && bg == 'light') {
        header.style.boxShadow = '0 0 10px #ccc';

    } else {
        header.style.boxShadow = '0 0';

    }
    if (document.documentElement.getClientRects()[0].top < 0) {
        backTop.style.display = 'flex';
    } else {
        backTop.style.display = 'none';
    }
})

// skill 
var boxSkill = document.querySelectorAll('.main-skill');

var count = 0;
function display(e) {
    if (count % 2 == 0) {
        var boxConten = e.querySelector('.content-skill');
        var icondown = e.querySelector('.down');
        icondown.style.transform = 'rotate(180deg)';
        boxConten.style.height = '300px';
    } else {
        var boxConten = e.querySelector('.content-skill');
        var icondown = e.querySelector('.down');
        icondown.style.transform = 'rotate(0deg)';
        boxConten.style.height = '0px';
    }
    count++;

}


// active qualification
var btn = document.querySelectorAll('.main-btn');
var education = document.querySelector('.education-main');
var work = document.querySelector('.work-main');
function activeColor(e){
    for (const item of btn) {
        item.classList.remove('activeColor');
    }
    e.classList.add('activeColor');
    console.log(e.id);

    if(e.id == 'btn2'){
        education.style.transform = 'translateY(-120%)';
        work.style.transform = 'translateY(-120%)';
    }else{
        education.style.transform = 'translateY(0%)';
        work.style.transform = 'translateY(0%)';
    }
}

var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');
var countt = 0;
function openServices(a){
    if(countt%2==0){
        overlay.style.zIndex = '10';
        modal.style.zIndex = '11';
        overlay.style.opacity = '1';
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }else{
        overlay.style.zIndex = '-10';
        modal.style.zIndex = '-11';
        overlay.style.opacity = '0';
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.1)';
    }
    countt++;
}


// slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});