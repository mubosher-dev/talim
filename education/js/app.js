//navbarga active klasini qoshish

let navbarItem = document.querySelectorAll('.nav-item'),
    navbar = document.querySelector('.nav');

navbarItem.forEach(navLink => {
    navLink.addEventListener('click', () => {
        document.querySelector('.navbar-nav .active').classList.remove('active')
        navLink.classList.add('active');
    })
})
// navbarga active klasiga qo'shish
window.addEventListener('scroll', function(){
    navbar.classList.toggle('active', window.scrollY > 0)
})

//navbar btn 

let navbarBtn = document.querySelector('.btn');

navbarBtn.addEventListener('click', function(){
    document.querySelector('.navbar-nav').classList.toggle('active');
    navbarBtn.querySelector('i').classList.toggle('fa-times')
     
})

// swiiper orqali carusel qilindi
    var swiper = new Swiper(".home", {
        spaceBetwen: 20,
        loop: true,
        dots:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
            }
        }

    });

    let date = new Date();
    let year = date.getFullYear();

    document.querySelector('#time').textContent = year;

   let skelet = document.querySelectorAll('.skeleton');
