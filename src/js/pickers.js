const appSection = document.getElementsByClassName('app-section')[0];

function changeSystemInterface() {
   this.checked = true;

   const systemBars = appSection.getElementsByClassName("system-title-bar__interface");
   for (let systemBar of systemBars) {
      systemBar.classList.toggle("system-title-bar__interface--hidden");
   }
}

const systemInterfaceRadios = document.getElementsByName("system");
for (let radio of systemInterfaceRadios) {
   radio.addEventListener('change', changeSystemInterface);
}




function changeBgImage() {
   const chatStartOverlay = appSection.getElementsByClassName("chat-view__start_overlay")[0];
   const chatBody = appSection.getElementsByClassName("chat-view-body")[0];

   const bgUrl = document.getElementById("bg-changer").value;

   if (bgUrl !== "") {
      chatStartOverlay.style.backgroundImage = "url(" + bgUrl +")";
      chatBody.style.backgroundImage = "url(" + bgUrl +")";
   }
}

const BgChangingButton = document.getElementById("bg-changer-btn");
BgChangingButton.addEventListener('click', changeBgImage);

const pickersList = {
   "$dialogsBg": {class: "chat-list-item", type: "bg"},
   "$dialogsNameFg": {class: "chat-list-item__author", type: "fg"},
   "$dialogsChatIconFg": {class: "", type: "fg"},
   "$dialogsSentIconFg": {class: "", type: "fg"},
   "$dialogsDateFg": {class: "chat-list-item__delivery-date", type: "fg"},
   "$dialogsTextFg": {class: "chat-list-item__last-msg", type: "fg"},
   "$dialogsTextFgService": {class: "chat-list-item__last-msg-type", type: "fg"},
   "$dialogsUnreadFg": {class: "chat-list-item__notification-counter", type: "fg"},
   "$dialogsUnreadBg": {class: "chat-list-item__notification-counter--unmuted", type: "bg"},
   "$dialogsUnreadBgMuted": {class: "chat-list-item__notification-counter--muted", type: "bg"},

   "$dialogsBgOver": {class: "", type: "bg"},
   "$dialogsRippleBg": {class: "", type: "bg"},
   "$dialogsNameFgOver": {class: "", type: "fg"},
   "$dialogsDateFgOver": {class: "", type: "fg"},
   "$dialogsTextFgOver": {class: "", type: "fg"},
   "$dialogsTextFgServiceOver": {class: "", type: "fg"},
   "$dialogsSentIconFgOver": {class: "", type: "fg"},
   "$dialogsUnreadBgOver": {class: "", type: "bg"},
   "$dialogsUnreadBgMutedOver": {class: "", type: "bg"},
   "$dialogsUnreadFgOver": {class: "", type: "fg"},

   "$dialogsBgActive": {class: "", type: "bg"},
   "$dialogsRippleBgActive": {class: "", type: "bg"},
   "$dialogsNameFgActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "chat-list-item__author", type: "fg"},
   "$dialogsChatIconFgActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "icon", type: "fg"},
   "$dialogsDateFgActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "chat-list-item__delivery-date", type: "fg"},
   "$dialogsTextFgActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "chat-list-item__last-msg", type: "fg"},
   "$dialogsUnreadFgActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "chat-list-item__notification-counter", type: "fg"},
   "$dialogsUnreadBgActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "chat-list-item__notification-counter--unmuted", type: "bg"},
   "$dialogsUnreadBgMutedActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "chat-list-item__notification-counter--muted", type: "bg"},
   "$dialogsTextFgServiceActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "chat-list-item__last-msg-type", type: "fg"},
   "$dialogsSentIconFgActive": {isInsideModifier: "true", modifierClass: "chat-list-item--selected", class: "chat-list-item__delivery-status", type: "fg"},
}

function setColor(elements, type, color) {
   if (type === "bg") {
      for (let element of elements) {
         element.style.backgroundColor = color;
      }
   } else if (type === "fg") {
      for (let element of elements) {
         element.style.color = color;
      }
   }
}

function changeColor() {
   const color = this.value;
   const pickerId = this.id;
   const type = pickersList[pickerId].type;
   let elements;
   
   if (pickersList[pickerId].isInsideModifier === "true") {
      const modifierClassList = document.getElementsByClassName(pickersList[pickerId].modifierClass);
      for (let modifierClass of modifierClassList) {
         elements = modifierClass.getElementsByClassName(pickersList[pickerId].class);
         setColor(elements, type, color);
      }
   } else {
      elements = document.getElementsByClassName(pickersList[pickerId].class);
      setColor(elements, type, color);
   }
}

const colorPickers = document.getElementsByClassName('picker-item');
for (let picker of colorPickers) {
   picker.addEventListener('change', changeColor);
}






function rgb2hex(rgb){
   rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
   return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  }

const pickers = document.getElementsByClassName("picker-item");
for (let picker of pickers) {
   if (pickersList[picker.id].class !== "") { //временно
      const element = document.getElementsByClassName(pickersList[picker.id].class)[0];
      const style = getComputedStyle(element);

      if (pickersList[picker.id].type === "bg") {
         picker.value = rgb2hex(style.backgroundColor);
      } else if (pickersList[picker.id].type === "fg") {
         picker.value = rgb2hex(style.color);
      }
   }
}

