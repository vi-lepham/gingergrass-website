
//Scroll Animation
const targets = document.querySelectorAll('.animation');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 1s forwards ease-out ${entry.target.dataset.delay}`;
        } else {
            entry.target.style.animation = 'none';
        }
    })
});
targets.forEach(target => {
    observer.observe(target);
});



//Slideshow Starts Here
let i = 0;
let images = [];
let time = 4000;
//Image List
images[0] = "gingergrass_0.jpg";
images[1] = "GG_entrance.jpg";
images[2] = "GG_inside.jpg";
images[3] = "GG_inhour.jpg";
images[4] = "GG_outsidein.jpg";

const slideShow = () => {
    const slider = document.querySelector('.slider img');
    slider.src = images[i];

    if (i < images.length - 1 ) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideShow()", time);
}
window.onload = slideShow;
//Slideshow Ends here




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


