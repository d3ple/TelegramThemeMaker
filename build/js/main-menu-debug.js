"use strict";

var mainMenuSidebar = document.getElementsByClassName('main-menu__sidebar')[0];
var mainMenuOverlay = document.getElementsByClassName('main-menu__overlay')[0];
var mainMenuBtn = document.getElementsByClassName('chat-list__main-menu-btn')[0];

var openMainMenu = function openMainMenu() {
  mainMenuSidebar.classList.remove("main-menu__sidebar--hidden");
  mainMenuOverlay.classList.remove("main-menu__overlay--hidden");
};

var closeMainMenu = function closeMainMenu() {
  mainMenuSidebar.classList.add("main-menu__sidebar--hidden");
  mainMenuOverlay.classList.add("main-menu__overlay--hidden");
};

mainMenuBtn.addEventListener('click', openMainMenu);
mainMenuOverlay.addEventListener('click', closeMainMenu);