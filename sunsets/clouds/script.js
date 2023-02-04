console.log("hello");

var input = document.querySelector('textarea[name="userInput"]')
var divChat = document.querySelector('div#chat')


function onKeyupInput(e){
  if (e.keyCode == 13){
    addMessage()
  }
}

function addMessage() {
  var value = input.value
  var newtext = document.createElement('p')
  newtext.classList.add("sun")
  newtext.innerHTML = value
  divChat.prepend(newtext)

  input.value = ""
  input.focus()
}


input.addEventListener('keyup', onKeyupInput)
