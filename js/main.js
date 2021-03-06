const pageColorDark = document.querySelector('#page-color'),
    featured = document.querySelector('.featured'),
    featuredTitle = document.querySelector('.section-title'),
    featuredDetails = document.querySelectorAll('.featured__details'),
    products = document.querySelector('.products'),
    links = document.querySelectorAll('i.fab'),
    sound2 = document.querySelector('.sound-2'),
    sound3 = document.querySelector('.sound-3'),
    buttonScroll = document.querySelector('#scroll'),
    menuBtn = document.querySelector('.btn-menu'),
    menu = document.querySelector('.menu'),
    menuNav = document.querySelector('.menu__nav'),
    menuItems = document.querySelectorAll('.menu__item'),
    menuBranding = document.querySelector('.menu__branding'),
    threImg = document.querySelector('.thre-img'),
    sbTitle = document.querySelector('.sb-title');


    //Menu settings
let showMenu = false;

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));
        menuBranding.classList.add('show');

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));
        menuBranding.classList.remove('show');

        //Set Menu State
        showMenu = false;
    }
}
menuBtn.addEventListener('click', toggleMenu);


    //Switch setting

pageColorDark.addEventListener('click', () => {
    if(pageColorDark.checked) {
        sound2.play();
        featured.style.background = '#444';
        featuredTitle.style.color = '#fff';
        threImg.style.background = '#222';
        sbTitle.style.color = '#fff';
        featuredDetails.forEach(element => {
            element.style.color = '#fff';
        });
        products.style.background = '#111'
        links.forEach(item => {
            item.style.color = '#000';
        });
    } else {
        sound3.play();
        featured.style.background = '#eee';
        featuredTitle.style.color = '#17353d';
        sbTitle.style.color = '#17353d';
        threImg.style.background = '#f5f5f5';
        featuredDetails.forEach(element => {
            element.style.color = '#17353d';
        });
        products.style.background = '#f5f5f5'
        links.forEach(item => {
            item.style.color = 'darkslategray';
        });
    }
});

//Smooth scroll settings
function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}
buttonScroll.addEventListener('click', () => {
    scrollTo(featured);
});

