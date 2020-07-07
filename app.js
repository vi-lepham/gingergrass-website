// Opening

TweenMax.staggerFrom(".o-logo div", 1.5, {
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
}, 0.2)

TweenMax.from(".o-image", 1.5, {
    height: 0,
    delay: 1.5,
    ease: Expo.easeInOut
})

TweenMax.from(".s-opening", 2, {
    opacity: 1,
    height: "100vh",
    delay: 2.5,
    ease: Expo.easeInOut
})

TweenMax.from(".main", 2, {
    overflow: "hidden",
    height: 0,
    delay: 2.8,
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
const burgerOptions = document.querySelectorAll('.burger-menu-content ul li');
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

        setTimeout(() => {
            errorMsg.remove();
        }, 3000)
    }
    static checkInputs() {
        const name = document.getElementById('name');
        const date = document.getElementById('date');
        const time = document.getElementById('time');
        const people = document.getElementById('people');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
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
        }
        if (!checkBox.checked) {
            Form.displayError(checkBox, 'Please agree to our Privacy Policy');
        }
    }
    static clearInputs() {
        const name = document.getElementById('name');
        const date = document.getElementById('date');
        const time = document.getElementById('time');
        const people = document.getElementById('people');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const checkBox = document.getElementById('policy');
        name.value = '';
        date.value = '';
        time.value = '';
        people.value = '';
        email.value = '';
        phone.value = '';
        checkBox.checked = false;
    }
}

// Event Listener for form submit
const reserveForm = document.querySelector('form');
const postFormData = () => {
    const formData = new FormData(reserveForm);

    fetch(reserveForm.getAttribute('action'), {
        method: "POST",
        headers: { 
            'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams(formData).toString()
      })
    .then(res => console.log(res))
    .catch(err => console.log(err.message));
}

reserveForm.addEventListener('submit', e => {
    e.preventDefault();
    Form.checkInputs();
    postFormData();
    Form.clearInputs();
    
})


// Intersection Observer for Nav
const hero = document.querySelector('.hero');
const observerNav = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        const reserveBtn = document.querySelector('.reserve-btn');
        const logo = document.querySelector('.h-logo');
        console.log(entry)
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

