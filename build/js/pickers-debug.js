"use strict";

var appSection = document.getElementsByClassName('app-section')[0];

function changeSystemInterface() {
  this.checked = true;
  var systemBars = appSection.getElementsByClassName("system-title-bar__interface");
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
  var chatStartOverlay = appSection.getElementsByClassName("chat-view__start_overlay")[0];
  var chatBody = appSection.getElementsByClassName("chat-view-body")[0];
  var bgUrl = document.getElementById("bg-changer").value;

  if (bgUrl !== "") {
    chatStartOverlay.style.backgroundImage = "url(" + bgUrl + ")";
    chatBody.style.backgroundImage = "url(" + bgUrl + ")";
  }
}

var BgChangingButton = document.getElementById("bg-changer-btn");
BgChangingButton.addEventListener('click', changeBgImage);
var pickersList = {
  "$dialogsBg": {
    class: "chat-list-item",
    type: "bg"
  },
  "$dialogsNameFg": {
    class: "chat-list-item__author",
    type: "fg"
  },
  "$dialogsChatIconFg": {
    class: "",
    type: "fg"
  },
  "$dialogsSentIconFg": {
    class: "",
    type: "fg"
  },
  "$dialogsDateFg": {
    class: "chat-list-item__delivery-date",
    type: "fg"
  },
  "$dialogsTextFg": {
    class: "chat-list-item__last-msg",
    type: "fg"
  },
  "$dialogsTextFgService": {
    class: "chat-list-item__last-msg-type",
    type: "fg"
  },
  "$dialogsUnreadFg": {
    class: "chat-list-item__notification-counter",
    type: "fg"
  },
  "$dialogsUnreadBg": {
    class: "chat-list-item__notification-counter--unmuted",
    type: "bg"
  },
  "$dialogsUnreadBgMuted": {
    class: "chat-list-item__notification-counter--muted",
    type: "bg"
  },
  "$dialogsBgOver": {
    class: "",
    type: "bg"
  },
  "$dialogsRippleBg": {
    class: "",
    type: "bg"
  },
  "$dialogsNameFgOver": {
    class: "",
    type: "fg"
  },
  "$dialogsDateFgOver": {
    class: "",
    type: "fg"
  },
  "$dialogsTextFgOver": {
    class: "",
    type: "fg"
  },
  "$dialogsTextFgServiceOver": {
    class: "",
    type: "fg"
  },
  "$dialogsSentIconFgOver": {
    class: "",
    type: "fg"
  },
  "$dialogsUnreadBgOver": {
    class: "",
    type: "bg"
  },
  "$dialogsUnreadBgMutedOver": {
    class: "",
    type: "bg"
  },
  "$dialogsUnreadFgOver": {
    class: "",
    type: "fg"
  },
  "$dialogsBgActive": {
    class: "",
    type: "bg"
  },
  "$dialogsRippleBgActive": {
    class: "",
    type: "bg"
  },
  "$dialogsNameFgActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "chat-list-item__author",
    type: "fg"
  },
  "$dialogsChatIconFgActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "icon",
    type: "fg"
  },
  "$dialogsDateFgActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "chat-list-item__delivery-date",
    type: "fg"
  },
  "$dialogsTextFgActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "chat-list-item__last-msg",
    type: "fg"
  },
  "$dialogsUnreadFgActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "chat-list-item__notification-counter",
    type: "fg"
  },
  "$dialogsUnreadBgActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "chat-list-item__notification-counter--unmuted",
    type: "bg"
  },
  "$dialogsUnreadBgMutedActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "chat-list-item__notification-counter--muted",
    type: "bg"
  },
  "$dialogsTextFgServiceActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "chat-list-item__last-msg-type",
    type: "fg"
  },
  "$dialogsSentIconFgActive": {
    isInsideModifier: "true",
    modifierClass: "chat-list-item--selected",
    class: "chat-list-item__delivery-status",
    type: "fg"
  }
};

function setColor(elements, type, color) {
  if (type === "bg") {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var element = _step3.value;
        element.style.backgroundColor = color;
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
  } else if (type === "fg") {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = elements[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _element = _step4.value;
        _element.style.color = color;
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
  }
}

function changeColor() {
  var color = this.value;
  var pickerId = this.id;
  var type = pickersList[pickerId].type;
  var elements;

  if (pickersList[pickerId].isInsideModifier === "true") {
    var modifierClassList = document.getElementsByClassName(pickersList[pickerId].modifierClass);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = modifierClassList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var modifierClass = _step5.value;
        elements = modifierClass.getElementsByClassName(pickersList[pickerId].class);
        setColor(elements, type, color);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  } else {
    elements = document.getElementsByClassName(pickersList[pickerId].class);
    setColor(elements, type, color);
  }
}

var colorPickers = document.getElementsByClassName('picker-item');
var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
  for (var _iterator6 = colorPickers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
    var picker = _step6.value;
    picker.addEventListener('change', changeColor);
  }
} catch (err) {
  _didIteratorError6 = true;
  _iteratorError6 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
      _iterator6.return();
    }
  } finally {
    if (_didIteratorError6) {
      throw _iteratorError6;
    }
  }
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

var pickers = document.getElementsByClassName("picker-item");
var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
  for (var _iterator7 = pickers[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
    var _picker = _step7.value;

    if (pickersList[_picker.id].class !== "") {
      //временно
      var element = document.getElementsByClassName(pickersList[_picker.id].class)[0];
      var style = getComputedStyle(element);

      if (pickersList[_picker.id].type === "bg") {
        _picker.value = rgb2hex(style.backgroundColor);
      } else if (pickersList[_picker.id].type === "fg") {
        _picker.value = rgb2hex(style.color);
      }
    }
  }
} catch (err) {
  _didIteratorError7 = true;
  _iteratorError7 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
      _iterator7.return();
    }
  } finally {
    if (_didIteratorError7) {
      throw _iteratorError7;
    }
  }
}