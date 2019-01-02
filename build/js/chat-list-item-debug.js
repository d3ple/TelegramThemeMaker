"use strict";

var appSection = document.getElementsByClassName('app-section')[0];

function showChat() {
  appSection.getElementsByClassName('chat-view-header')[0].classList.remove("chat-view-header--hidden");
  appSection.getElementsByClassName('chat-view-body')[0].classList.remove("chat-view-body--hidden");
  appSection.getElementsByClassName('chat-view-footer')[0].classList.remove("chat-view-footer--hidden");
  appSection.getElementsByClassName('chat-view__start_overlay')[0].classList.add("chat-view__start_overlay--hidden");
}

function isSelectedConversationExist(item) {
  return typeof item !== "undefined" ? true : false;
}

function chooseChatFooter(item) {
  var chatFooter = document.getElementById("chat-view-footer--chat");
  var channelFooter = document.getElementById("chat-view-footer--channel");

  if (item.classList.contains("chat-list-item--channel")) {
    chatFooter.classList.add("chat-view-footer__inner--hidden");
    channelFooter.classList.remove("chat-view-footer__inner--hidden");
  } else {
    chatFooter.classList.remove("chat-view-footer__inner--hidden");
    channelFooter.classList.add("chat-view-footer__inner--hidden");
  }
}

function setChatName(thisConversation) {
  var thisConversationName = thisConversation.getElementsByClassName("chat-list-item__author")[0];
  var chatConversationName = appSection.getElementsByClassName("chat-view-header__chat-name")[0];
  chatConversationName.textContent = thisConversationName.textContent;
}

function selectConversation() {
  var selectedConversation = appSection.getElementsByClassName('chat-list-item--selected')[0];

  if (!isSelectedConversationExist(selectedConversation)) {
    showChat();
  }

  if (isSelectedConversationExist(selectedConversation)) {
    selectedConversation.classList.toggle("chat-list-item--selected");
    var selectedCoversationChat = document.getElementById(selectedConversation.id + "-chat");
    selectedCoversationChat.classList.toggle("chat-view-body__chat--selected");
  }

  this.classList.toggle("chat-list-item--selected");
  var thisConversationChat = document.getElementById(this.id + "-chat");
  thisConversationChat.classList.toggle("chat-view-body__chat--selected");
  chooseChatFooter(this);
  setChatName(this);
}

var conversationsItems = appSection.getElementsByClassName('chat-list-item');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = conversationsItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
    item.addEventListener('click', selectConversation);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}