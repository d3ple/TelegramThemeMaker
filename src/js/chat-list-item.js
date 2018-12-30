function showChat() {
   document.getElementsByClassName('chat-view-header')[0].classList.remove("chat-view-header--hidden");
   document.getElementsByClassName('chat-view-body')[0].classList.remove("chat-view-body--hidden");
   document.getElementsByClassName('chat-view-footer')[0].classList.remove("chat-view-footer--hidden");
   document.getElementsByClassName('chat-view__start_overlay')[0].classList.add("chat-view__start_overlay--hidden");
}

function isSelectedConversationExist(item) {
   return (typeof item !== "undefined" ? true : false);
}

function chooseChatFooter(item) {
   const chatFooter = document.getElementById("chat-view-footer--chat");
   const channelFooter = document.getElementById("chat-view-footer--channel");

   if (item.classList.contains("chat-list-item--channel")) {
      chatFooter.classList.add("chat-view-footer__inner--hidden");
      channelFooter.classList.remove("chat-view-footer__inner--hidden");
   } else {
      chatFooter.classList.remove("chat-view-footer__inner--hidden");
      channelFooter.classList.add("chat-view-footer__inner--hidden");
   }
}

function setChatName(thisConversation) {
   const thisConversationName = thisConversation.getElementsByClassName("chat-list-item__author")[0];
   const chatConversationName = document.getElementsByClassName("chat-view-header__chat-name")[0];
   chatConversationName.textContent = thisConversationName.textContent;
}

function selectConversation() {
   const selectedConversation = document.getElementsByClassName('chat-list-item--selected')[0];

   if (!isSelectedConversationExist(selectedConversation)) {
      showChat();
   }

   if (isSelectedConversationExist(selectedConversation)) {
      selectedConversation.classList.toggle("chat-list-item--selected");
      const selectedCoversationChat = document.getElementById(selectedConversation.id + "-chat");
      selectedCoversationChat.classList.toggle("chat-view-body__chat--selected");
   }

   this.classList.toggle("chat-list-item--selected");
   const thisConversationChat = document.getElementById(this.id + "-chat");
   thisConversationChat.classList.toggle("chat-view-body__chat--selected");

   chooseChatFooter(this);
   setChatName(this);
}


const conversationsItems = document.getElementsByClassName('chat-list-item');
for (let item of conversationsItems) {
   item.addEventListener('click', selectConversation);
}