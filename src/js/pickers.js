function changeSystemInterface() {
   this.checked = true;

   const systemBars = document.getElementsByClassName("system-title-bar__interface");
   for (let systemBar of systemBars) {
      systemBar.classList.toggle("system-title-bar__interface--hidden");
   }
}

const systemInterfaceRadios = document.getElementsByName("system");
for (let radio of systemInterfaceRadios) {
   radio.addEventListener('change', changeSystemInterface);
}




function changeBgImage() {
   const chatStartOverlay = document.getElementsByClassName("chat-view__start_overlay")[0];
   const chatBody = document.getElementsByClassName("chat-view-body")[0];

   const bgUrl = document.getElementById("bg-changer").value;

   if (bgUrl !== "") {
      chatStartOverlay.style.backgroundImage = "url(" + bgUrl +")";
      chatBody.style.backgroundImage = "url(" + bgUrl +")";
   }
}

const BgChangingButton = document.getElementById("bg-changer-btn");
BgChangingButton.addEventListener('click', changeBgImage);




function changeBg() {
   const color = this.value;
   const pickerId = this.id;
   const element = document.getElementsByClassName(pickerId)[0];

   element.style.backgroundColor = color;
   console.log(pickerId + ": " + color + ";");
}

const colorPickers = document.getElementsByClassName('picker');
for (let picker of colorPickers) {
   picker.addEventListener('change', changeBg);
}




function rgb2hex(rgb){
   rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
   return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  }

const pickers = document.getElementsByClassName("picker");
for (let picker of pickers) {
   const element = document.getElementsByClassName(picker.id)[0];
   const style = getComputedStyle(element);
   picker.value = rgb2hex(style.backgroundColor);
   console.log(rgb2hex(style.backgroundColor));
}




function makeTheme() {
   const themeTextField = document.getElementsByClassName("theme-text-field")[0];
   themeTextField.value = 
      "$dialogsBg: " + document.getElementById("$dialogsBg").value + ";\n" +
      "$topBarBg: " + document.getElementById("$topBarBg").value + ";\n" +
      "$searchedBarBg: " + document.getElementById("$searchedBarBg").value + ";\n" +
      "$titleBg: " + document.getElementById("$titleBg").value + ";";
}