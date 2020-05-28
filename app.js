
const targets1 = document.querySelectorAll('.animation');
const menuImages = document.querySelectorAll('.toggle-menu img');
const menuLists = document.querySelectorAll('.menu-list li');
const 

//Scroll Animation
observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 1s forwards ease-out ${entry.target.dataset.delay}`;
        } else {
            entry.target.style.animation = 'none';
        }
    })
});

targets1.forEach(target => {
    observer.observe(target);
});

//Slideshow Starts Here

let i = 0;
let images = [];
let time = 4000;
const slider = document.querySelector('.slider img');

//Image List
images[0] = "gingergrass_0.jpg";
images[1] = "GG_entrance.jpg";
images[2] = "GG_inside.jpg";
images[3] = "GG_inhour.jpg";
images[4] = "GG_outsidein.jpg";

const slideShow = () => {
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

//Enlarge Menus
menuImages.forEach(image => {
    const enlarge = document.querySelector('.enlarge');
    const closeBtn = document.querySelector('.enlarge button');
    let enlargedImg = document.querySelector('.enlarge img')
    let imageSrc = image.src;

    image.addEventListener('click', () => {
        enlarge.style.display = 'block';
        enlargedImg.src = imageSrc;
    })

    closeBtn.addEventListener('click', () => {
        enlarge.style.display = 'none';
    })
})

// Select menu types 
menuLists.forEach(list => {
    list.addEventListener('click', () => {
        let current = document.querySelectorAll('.active');
        // If select another list
        if (current.length > 0) {
            current[0].classList.remove('active');
        }
        
        list.className += 'active';


    })
})

// Toggle menu 
menuLists.forEach((list, index) => {
    list.addEventListener('click', () => {
        
        const menu = document.querySelectorAll('.toggle-menu li');
        let current = document.querySelectorAll('.active');
        let displayed = document.querySelectorAll('.displayed')

        if (displayed.length > 0) {
            displayed[0].classList.remove('displayed');
        }
        
        menu[index].className += 'displayed';

    })
})




