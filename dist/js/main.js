//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav'); //UL
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial sate of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Set menu state
        showMenu = false;
    }
}

//spinner function
function myLoad() {
    document.querySelector('.spinner').classList.add('spinner-1');
    // document.querySelector('body').classList.add('hidden');
    setTimeout(() => {
      document.querySelector('.spinner').classList.remove('spinner-1');
    //   document.querySelector('body').classList.remove('hidden');
    }, 300);
}


