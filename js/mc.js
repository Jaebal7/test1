// 헤더 픽스

let wrap = document.getElementById('wrap')
let container = document.getElementById('container');
let container_o_top = container.offsetTop;

let header = document.getElementsByClassName('header')[0];

console.log("container_o_top: " , container_o_top)
let chk = true;
let timeout = "";
document.addEventListener('scroll', function(){
    let scrollY = window.scrollY;
    // console.log(scrollY, container_o_top)

    if( chk && scrollY > 140) {
        chk=false;
        console.log(111)
        // wrap.classList.add('wrap_active')
        // header.classList.add('fixed')
        header.style.top="-80px"

        timeout = setTimeout(()=>{
            header.classList.add('fixed')
            header.style.top="0px"
        }, 100)
    }
    else if(!chk && scrollY <= 140) {
        
        chk=true;
        clearTimeout(timeout)
        console.log(222)
        // wrap.classList.remove('wrap_active')
        header.classList.remove('fixed')
    }
})

// 광고 메뉴 스와이퍼

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const playPauseBtn = $('.play-pause-btn');

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            if (progressCircle && progressContent) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    }
    
});
// $('.start').on('click', function(){
//     swiper.autoplay.start();
//     return false;
// })
// $('.stop').on('click', function(){
//     swiper.autoplay.stop();
//     return false;
// })  

// playPauseBtn.on('click', function() {
//     if (swiper.autoplay.running) {
//         // 현재 재생 중이라면 정지
//         swiper.autoplay.stop();
//         $(this).text('재생');
//     } else {
//         // 현재 정지 중이라면 재생
//         swiper.autoplay.start();
//         $(this).text('정지');
//     }
//     return false;
// });

// playPauseBtn.on('click', function() {
//     const $img = $(this).find('img');
    
//     if (swiper.autoplay.running) {
//         // 현재 재생 중이라면 정지
//         swiper.autoplay.stop();
//         $img.attr('src', './img/mc/bg_swiper_new.png'); // 재생 아이콘 경로
//     } else {
//         // 현재 정지 중이라면 재생
//         swiper.autoplay.start();
//         $img.attr('src', './img/mc/bg_swiper_new.png'); // 정지 아이콘 경로
//     }
//     return false;
// });

playPauseBtn.on('click', function() {
    const $btn = $(this);
    
    if (swiper.autoplay.running) {
        // 현재 재생 중이라면 정지
        swiper.autoplay.stop();
        $btn.addClass('paused');
    } else {
        // 현재 정지 중이라면 재생
        swiper.autoplay.start();
        $btn.removeClass('paused');
    }
    return false;
});

// 더보기 버튼

function put_item() {
    let itemList = document.getElementsByClassName('new_item')[0];

    let itemCount = document.getElementsByClassName('itemHidden').length;

    for(let i=itemCount; i<itemCount+6; i++) {
        itemList.innerHTML += `<li class="item">${i}</li> `
    }
}

// 메뉴 펼치기

let dth = document.getElementsByClassName('dth')[0]; 
let menu_pan = document.getElementsByClassName('menu_pan')[0];
let depth2 = document.getElementsByClassName('depth2');

dth.addEventListener('mouseenter', function(){
    for(let i=0; i<4; i++) {
        depth2[i].classList.add('active')
    }
    menu_pan.classList.add('active')
})
dth.addEventListener('mouseleave', function(){
    for(let i=0; i<4; i++) {
        depth2[i].classList.remove('active')
    }
    menu_pan.classList.remove('active')
}) 
menu_pan.addEventListener('mouseenter', function(){
    for(let i=0; i<4; i++) {
        depth2[i].classList.add('active')
    }
    menu_pan.classList.add('active')
})
menu_pan.addEventListener('mouseleave', function(){
    for(let i=0; i<4; i++) {
        depth2[i].classList.remove('active')
    }
    menu_pan.classList.remove('active')
})

// let btns = document.getElementsByClassName('btns')[0];
// let start = document.getElementsByClassName('start')[0];
// let stop = document.getElementsByClassName('stop')[0];

// btns.addEventListener('click', function(){ 
//     stop.classList.remove('active')
//     start.classList.add('active')

//     return btns
// })

// 재생정지 버튼 만들기