//We take the button for activating the menu
let openMenu  = document.getElementsByClassName('dart-nav-responsive-open')[0];
let closeMenu = document.getElementsByClassName('dart-nav-responsive-close')[0];

openMenu.addEventListener('click', menuToggle);
closeMenu.addEventListener('click', menuToggle);

function menuToggle(){
    let menu = document.getElementsByClassName('dart-aside-nav')[0];
    menu.classList.toggle('dart-nav-visible');
    menu.classList.toggle('dart-nav-invisible')
}
