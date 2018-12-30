"use strict";

function changeBgImage() {
  var chatStartOverlay = document.getElementsByClassName("chat__start_overlay")[0];
  var chatBody = document.getElementsByClassName("chat-body")[0];
  var bgUrl = document.getElementById("bg-changer").value;

  if (bgUrl !== "") {
    chatStartOverlay.style.backgroundImage = "url(" + bgUrl + ")";
    chatBody.style.backgroundImage = "url(" + bgUrl + ")";
  }
}

var BgChangingButton = document.getElementById("bg-changer-btn");
BgChangingButton.addEventListener('click', changeBgImage);