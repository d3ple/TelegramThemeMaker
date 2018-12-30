const mainMenuSidebar = document.getElementsByClassName('main-menu__sidebar')[0];
const mainMenuOverlay = document.getElementsByClassName('main-menu__overlay')[0];
const mainMenuBtn = document.getElementsByClassName('chat-list__main-menu-btn')[0];

const openMainMenu = function () {
   mainMenuSidebar.classList.remove("main-menu__sidebar--hidden");
   mainMenuOverlay.classList.remove("main-menu__overlay--hidden");
}

const closeMainMenu = function () {
   mainMenuSidebar.classList.add("main-menu__sidebar--hidden");
   mainMenuOverlay.classList.add("main-menu__overlay--hidden");
}

mainMenuBtn.addEventListener('click', openMainMenu);
mainMenuOverlay.addEventListener('click', closeMainMenu);