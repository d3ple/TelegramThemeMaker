"use strict";

function selectMessage() {
  document.getElementsByClassName("chat-view-header__inner--selected-msg")[0].style.marginTop = "0";
  this.classList.add("chat-msg--selected");
  this.getElementsByClassName("chat-msg__pointer")[0].classList.add("chat-msg__pointer--selected");
}

function cancelMsgSelection() {
  document.getElementsByClassName("chat-view-header__inner--selected-msg")[0].style.marginTop = "-48px";
  var allSelected = document.getElementsByClassName("chat-msg--selected");

  while (allSelected.length) {
    allSelected[0].getElementsByClassName("chat-msg__pointer")[0].classList.remove("chat-msg__pointer--selected");
    allSelected[0].classList.remove("chat-msg--selected");
  }
}

var messages = document.getElementsByClassName("chat-msg");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var message = _step.value;
    message.addEventListener('click', selectMessage);
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

var cancelMsgSelectionBtn = document.getElementsByClassName("chat-view-header__selected-msg-btn--cancel")[0];
cancelMsgSelectionBtn.addEventListener('click', cancelMsgSelection);