const reserveContent = document.querySelector('.reserve-content-wrapper');
const reserve = document.querySelector('.reserve-content');
const burger = document.querySelector('.burger-menu-content');
const burgerContent = document.querySelector('.burger-menu-content ul');

// Toggle reservation window 
const toggleReserve = () => {
    reserveContent.style.transform = 'translateX(0)';
    reserve.style.transform = 'translateX(0)';
    reserve.style.backgroundColor = 'rgba(0,0,0,.7)';
}

const closeReserve = () => {
    reserveContent.style.transform = 'translateX(-100%)';
    reserve.style.transform = 'translateX(-100%)';
    reserve.style.backgroundColor = 'transparent';
}

document.querySelector('.reserve-btn').addEventListener('click', toggleReserve);
document.querySelector('.close-btn').addEventListener('click', closeReserve);

// Toggle burger menu

document.querySelector('.burger-btn').addEventListener('click', () => {
    const lineTop = document.querySelector('.burger-btn .line1');
    const lineBottom = document.querySelector('.burger-btn .line2');

    lineTop.classList.toggle('open');
    lineBottom.classList.toggle('open');
    burger.classList.toggle('active');
    document.querySelector('.reserve-btn').classList.toggle('hide');
})

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


