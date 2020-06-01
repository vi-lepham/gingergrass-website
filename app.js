//Info Box Appear on Scroll Animation
const scrolledIntoView = () => {
    const infoBox = document.querySelector('.info');
    const position = infoBox.getBoundingClientRect();
    const elmTop = position.top;
    const appearHeight = window.innerHeight / 2;

    if (elmTop < appearHeight) {
        infoBox.style.display = 'flex';
        infoBox.style.animation = 'fadeIn 1s ease';
    }

}
/*const fadeFromView = () => {
    const infoBox = document.querySelector('.info');
    const position = infoBox.getBoundingClientRect();
    const elmBottom = position.bottom;
    const fadeHeight = window.innerHeight / 3;

    if (elmBottom < fadeHeight) {
        infoBox.style.animation = 'fadeOut 1s ease';
    }
}
*/


window.addEventListener('scroll', scrolledIntoView);
window.addEventListener('scroll', fadeFromView);

//Scroll Image Parallax
window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.parallax');
    for (i = 0; i < target.length; i++) {
        let position = window.pageYOffset * target[i].dataset.rate;
        target[i].style.transform = 'translate3d(0px, '+position+'px, 0px)';
    }
});

/*
//Slideshow Ends here
 this.parallax = (t,e)=>{
                this.offset = (this.wrap[e].getBoundingClientRect().top - window.innerHeight) / 5,
                t.querySelector("img").style.transform = "translateY(" + Math.abs(this.offset) + "px)"
            }
*/



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


