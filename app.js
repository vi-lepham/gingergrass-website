// UI Class
class UI {
    static toggleReserve() {
        const reserve = document.querySelector('.reserve-content');
        reserve.classList.add('active');
    }
    static closeReserve() {
        const reserve = document.querySelector('.reserve-content');
        reserve.classList.remove('active');
    }
    static toggleBurger() {
        const burger = document.querySelector('.burger-menu-content');
        const reserveBtn = document.querySelector('.reserve-btn');
        const logo = document.querySelector('.h-logo');
        burger.classList.toggle('active');
        setTimeout(() => {
            if (!reserveBtn.classList.contains('hide')) {
                reserveBtn.classList.add('hide');
            } else {
                reserveBtn.classList.add('hide');
            }
            if (!logo.classList.contains('hide')) {
                logo.classList.add('hide');
            } else {
                logo.classList.add('hide');
            }
        }, 500);
    }
    static animateBurgerIcon = () => {
        const lineTop = document.querySelector('.burger-btn .line1');
        const lineBottom = document.querySelector('.burger-btn .line2');
    
        lineTop.classList.toggle('open');
        lineBottom.classList.toggle('open');
    }
}

// Form Class
class Form {
    static displayError(input, msg) {
        let inputType = input.parentElement;
        if (input === date || input === time || input === email || input === phone) {
            inputType = input.parentElement.parentElement;
        }
        const errorMsg = inputType.querySelector('small');
        
        errorMsg.textContent = msg;
    }
    static checkInputs() {
        const name = document.getElementById('name');
        const date = document.getElementById('date');
        const time = document.getElementById('time');
        const people = document.getElementById('people');
        const email = document.getElementById('email');
        const phone = document.getElementById('name');
        const checkBox = document.getElementById('policy');
        if (name.value.trim() === '') {
            Form.displayError(name, 'Name is required')
        }
        if (date.value === '') {
            Form.displayError(date, 'Date is required')
        }
        if (time.value === '') {
            Form.displayError(time, 'Specific time is required')
        }
        if (people.value.trim() === '') {
            Form.displayError(people, 'Number of people is required')
        }
        if (email.value === '' || phone.value === '') {
            Form.displayError(email, 'Contact is required')
            console.log(email.value)
        }
        if (!checkBox.checked) {
            Form.displayError(checkBox, 'Please agree to our Privacy Policy');
        }
    }
}

// Event Listeners for reservation window 
document.querySelectorAll('.reserve-btn').forEach(button => {
    button.addEventListener('click', UI.toggleReserve);
})
document.querySelector('.close-btn').addEventListener('click', UI.closeReserve);

// Event Listener for burger menu window
document.querySelector('.burger-btn').addEventListener('click', () => {
    UI.toggleBurger();
    UI.animateBurgerIcon();
})

// Event Listener for form submit
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    Form.checkInputs();
})


// Intersection Observer for Nav
const hero = document.querySelector('.hero');
const observerNav = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.querySelector('.reserve-btn').classList.add('hide');
            document.querySelector('.h-logo').classList.add('hide');
        } else {
            document.querySelector('.reserve-btn').classList.remove('hide');
            document.querySelector('.h-logo').classList.remove('hide');
        }
    })
}, {threshold: 1, rootMargin: "0px 200px 0px 0px"})

observerNav.observe(hero);

// Autoplay Slide
const carousel = document.querySelector('.c-track');
const carouselImg = document.querySelectorAll('.c-track li');
const nextBtn = document.querySelector('.right-button');
const prevBtn = document.querySelector('.left-button');
let index = 1;
const size = carouselImg[0].clientWidth;

class Slide {
    static infiniteSlide() {
        
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
    }
    static nextSlide() {
        index++;
        carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
        carousel.style.transition = 'transform 1s ease-in-out';
    }
    static prevSlide() {
        index--;
        carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
        carousel.style.transition = 'transform 1s ease-in-out';
    }
}

Slide.infiniteSlide();
nextBtn.addEventListener('click', Slide.nextSlide);
prevBtn.addEventListener('click', Slide.prevSlide);


//Toggle Menu on each List Button Click
const menuLists = document.querySelectorAll('.menu-list li');

menuLists.forEach(list => {
    list.addEventListener('click', () => {
        // const toggledMenu = document.querySelectorAll('.toggle-menu li');
        const active = document.querySelectorAll('.active');
        // const displayed = document.querySelectorAll('.displayed');

        if (active.length > 0) {
            active[0].classList.remove('active');
        }
        list.className += 'active';
        
        // if (displayed.length > 0) {
        //     displayed[0].classList.remove('displayed');
        // }
        // toggledMenu[index].className += 'displayed';
    });
})


