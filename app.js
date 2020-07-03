// Opening
TweenMax.staggerFrom(".o-logo div", 1.5, {
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
}, 0.2)
TweenMax.to(".o-image", 1.5, {
    height: '60vh',
    delay: 1.6,
    ease: Expo.easeInOut
})
TweenMax.to(".o-image img", 1.5, {
    height: '100%',
    delay: 2.3,
    ease: Expo.easeInOut
})
TweenMax.to(".s-opening", 2, {
    y: '-100vh',
    height: 0,
    delay: 2.7,
    ease: Expo.easeInOut
})
TweenMax.to("main", 2, {
    overflow: 'visible',
    height: '100%',
    delay: 3,
    ease: Expo.easeInOut
})

// UI Class
class UI {
    static toggleBurger() {
        const burger = document.querySelector('.burger-menu-content');
        const reserveBtn = document.querySelector('.reserve-btn');
        const logo = document.querySelector('.h-logo');
        burger.classList.toggle('active');
        setTimeout(() => {
            if(burger.classList.contains('active')) {
                reserveBtn.classList.add('hide');
                logo.classList.add('hide');
            } else {
                reserveBtn.classList.remove('hide');
                logo.classList.remove('hide');
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

// Event Listener for burger menu window
document.querySelector('.burger-btn').addEventListener('click', () => {
    UI.toggleBurger();
    UI.animateBurgerIcon();
})

// Event Listener for click in any burger menu options
const burgerOptions = document.querySelectorAll('.burger-menu-content ul li a');
burgerOptions.forEach(option => {
    option.addEventListener('click', () => {
        UI.toggleBurger();
        UI.animateBurgerIcon();
    })
})

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

// Event Listener for form submit
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    Form.checkInputs();
})


// Intersection Observer for Nav
const hero = document.querySelector('.hero');
const observerNav = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        const reserveBtn = document.querySelector('.reserve-btn');
        const logo = document.querySelector('.h-logo');
        if (!entry.isIntersecting) {
            
            reserveBtn.className = 'reserve-btn hide';
            logo.className = 'h-logo hide';
            
        } else {
            reserveBtn.classList.remove('hide');
            logo.classList.remove('hide');
        }
    })
}, {threshold: 1, rootMargin: "0px 200px 0px 0px"})

observerNav.observe(hero);

