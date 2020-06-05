//Autoplay Carousel
const carousel = document.querySelector('.carousel-track');
const carouselImg = document.querySelectorAll('.carousel-track li');
const nextBtn = document.querySelector('.right-button');
const prevBtn = document.querySelector('.left-button');
let index = 1;
const size = carouselImg[0].clientWidth;

const autoPlay = () => {
    const startSlide = setInterval(() => {
        index++;
        carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
        carousel.style.transition = 'transform 1s ease-in-out';
    }, 5000)
}

carousel.addEventListener('transitionend', () => {
    if (carouselImg[index].id === 'lastClone') {
        carousel.style.transition = 'none';
        index = carouselImg.length - 2;
        carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
    }
    if (carouselImg[index].id === 'firstClone') {
        carousel.style.transition = 'none';
        index = carouselImg.length - index;
        carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
    }
})

const nextSlide = () => {
    index++;
    carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
    carousel.style.transition = 'transform 1s ease-in-out';
}
const prevSlide = () => {
    index--;
    carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
    carousel.style.transition = 'transform 1s ease-in-out';
}

autoPlay();
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

//Info Box Appear on Scroll Animation
const infoBox = document.querySelector ('.info');

const fadeOptions = {
    threshold: 1,
};

const fadeInOnScroll = new IntersectionObserver(function(entries, fadeInOnScroll) {
    entries.forEach(entry => {
        console.log(entry);
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            fadeInOnScroll.unobserve(entry.target);
        }
    });
}, fadeOptions);

fadeInOnScroll.observe(infoBox);

// Enlarge Menus on Click
const menuImages = document.querySelectorAll('.toggle-menu img');

menuImages.forEach(image => {
    const enlarge = document.querySelector('.enlarge');
    const closeBtn = document.querySelector('.enlarge button');
    const enlargedImg = document.querySelector('.enlarge img');
    let imageSrc = image.src;

    image.addEventListener('click', () => {
        enlarge.style.display = 'block';
        enlargedImg.src = imageSrc;
    })

    closeBtn.addEventListener('click', () => {
        enlarge.style.display = 'none';
    })
})


//Toggle Menu on each List Button Click
const menuLists = document.querySelectorAll('.menu-list li');

menuLists.forEach((list, index) => {
    list.addEventListener('click', () => {
        const toggledMenu = document.querySelectorAll('.toggle-menu li');
        const active = document.querySelectorAll('.active');
        const displayed = document.querySelectorAll('.displayed');

        if (active.length > 0) {
            active[0].classList.remove('active');
        }
        list.className += 'active';
        
        if (displayed.length > 0) {
            displayed[0].classList.remove('displayed');
        }
        toggledMenu[index].className += 'displayed';
    });
})


