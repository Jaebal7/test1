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