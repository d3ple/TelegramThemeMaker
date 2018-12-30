function selectMessage() {
    document.getElementsByClassName("chat-view-header__inner--selected-msg")[0].style.marginTop = "0";
    this.classList.add("chat-msg--selected");
    this.getElementsByClassName("chat-msg__pointer")[0].classList.add("chat-msg__pointer--selected");
 }
 
 function cancelMsgSelection() {
    document.getElementsByClassName("chat-view-header__inner--selected-msg")[0].style.marginTop = "-48px";
    const allSelected = document.getElementsByClassName("chat-msg--selected");
    while (allSelected.length) {
       allSelected[0].getElementsByClassName("chat-msg__pointer")[0].classList.remove("chat-msg__pointer--selected");
       allSelected[0].classList.remove("chat-msg--selected");
    }
 }
 
 const messages = document.getElementsByClassName("chat-msg");
 for (let message of messages) {
    message.addEventListener('click', selectMessage);
 }
 
 
 const cancelMsgSelectionBtn = document.getElementsByClassName("chat-view-header__selected-msg-btn--cancel")[0];
 cancelMsgSelectionBtn.addEventListener('click', cancelMsgSelection);