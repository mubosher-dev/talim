   // eng avval navbar knopklari click bo'lganda videodarslar chiqib kelishi kerak
    let iframes = document.querySelectorAll('iframe');
    let lessonBtn = document.querySelectorAll('.nav-link'),
    lessonWrapper = document.querySelectorAll('.vidio-items'),
    videoLwrapper = document.querySelector('.vidio-wrapper'),
    navbarWrapper = document.querySelector('.navbar-nav');

    lessonBtn.forEach((lBtn, i) => {
        lBtn.addEventListener('click', function() {
        videoLwrapper.querySelector('.active').classList.remove('active');
        navbarWrapper.querySelector('.active').classList.remove('active');
            lBtn.classList.add('active');
            lessonWrapper[i].classList.add('active');
        });
    });


    //knopkani bosilganda btn orqali lesson itemlarga active klasi qilinadi
    let lMenBtn = document.querySelectorAll('.mBtn'),
        navbarItems = document.querySelectorAll('.navbar');

    lMenBtn.forEach((lMen, i ) => {
        lMen.addEventListener('click', function() {
            navbarItems[i].classList.toggle('active');
            lMen.classList.toggle('left');
        })
    })


    function addClass(element){
        element.forEach(el => {
            el.classList.add('video');
        })
    }

    addClass(iframes);


    let widths = window.innerWidth;


    if(widths <= 768){
        document.body.style.width = "900px"
    }


   


   