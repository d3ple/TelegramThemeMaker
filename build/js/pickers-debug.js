"use strict";

function changeSystemInterface() {
  this.checked = true;
  var systemBars = document.getElementsByClassName("system-title-bar__interface");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = systemBars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var systemBar = _step.value;
      systemBar.classList.toggle("system-title-bar__interface--hidden");
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
}

var systemInterfaceRadios = document.getElementsByName("system");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = systemInterfaceRadios[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var radio = _step2.value;
    radio.addEventListener('change', changeSystemInterface);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

function changeBgImage() {
  var chatStartOverlay = document.getElementsByClassName("chat-view__start_overlay")[0];
  var chatBody = document.getElementsByClassName("chat-view-body")[0];
  var bgUrl = document.getElementById("bg-changer").value;

  if (bgUrl !== "") {
    chatStartOverlay.style.backgroundImage = "url(" + bgUrl + ")";
    chatBody.style.backgroundImage = "url(" + bgUrl + ")";
  }
}

var BgChangingButton = document.getElementById("bg-changer-btn");
BgChangingButton.addEventListener('click', changeBgImage);

function changeBg() {
  var color = this.value;
  var pickerId = this.id;
  var element = document.getElementsByClassName(pickerId)[0];
  element.style.backgroundColor = color;
  console.log(pickerId + ": " + color + ";");
}

var colorPickers = document.getElementsByClassName('picker');
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = colorPickers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var picker = _step3.value;
    picker.addEventListener('change', changeBg);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

var pickers = document.getElementsByClassName("picker");
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = pickers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var _picker = _step4.value;
    var element = document.getElementsByClassName(_picker.id)[0];
    var style = getComputedStyle(element);
    _picker.value = rgb2hex(style.backgroundColor);
    console.log(rgb2hex(style.backgroundColor));
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

function makeTheme() {
  var themeTextField = document.getElementsByClassName("theme-text-field")[0];
  themeTextField.value = "$dialogsBg: " + document.getElementById("$dialogsBg").value + ";\n" + "$topBarBg: " + document.getElementById("$topBarBg").value + ";\n" + "$searchedBarBg: " + document.getElementById("$searchedBarBg").value + ";\n" + "$titleBg: " + document.getElementById("$titleBg").value + ";";
}