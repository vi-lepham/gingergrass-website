// Create an Menu object 
//on every click of each buttons, change the list button to 'active' & turn off the previous active button.
//on every click of each buttons, display the menu that has the corresponding index with the list button.

const buttons = document.querySelectorAll('.menu-list li');
const active = document.querySelectorAll('.active');
const menus = document.querySelectorAll('.toggle-menu li');
const displayed = document.querySelectorAll('.displayed');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changeActiveBtn);
    buttons[i].addEventListener('click', changeDisplayedMenu);

    const changeActiveBtn = () => {
        buttons[i].className += 'active';
        
        if (active.length > 0) {
            active[0].classList.remove('active');
        }
    }

    const changeDisplayedMenu = () => {
        menus[i].className += 'displayed';

        if (displayed.length > 0) {
            displayed[0].classList.remove('displayed');
        }
    }
}


/*const menuList = {
    init: function() {
        this.cacheDOM();
        this.bindEvents();
    },
    cacheDOM: function() {
        this.buttons = document.querySelectorAll('.menu-list li');
        this.active = document.querySelectorAll('.active');
        this.menus = document.querySelectorAll('.toggle-menu li');
        this.displayed = document.querySelectorAll('.displayed');
    },
    bindEvents: function() {
        this.buttons.addEventListener('click', this.changeActiveBtn.bind(this));
        this.buttons.addEventListener('click', this.changeDisplayedMenu.bind(this));
    },
    changeActiveBtn: function() {
        this.buttons.className += 'active';

        if (this.active.length > 0) {
            this.active[0].classList.remove('active');
        }
    },
    
}*/