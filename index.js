function handleClick(event) {
  var buttonInnerHTML = event.target.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

}

var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function(event1) {
  makeSound(event1.key);
  buttonAnimation(event1.key);
})

function makeSound (key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var tom4 = new Audio("./sounds/snare.mp3");
      tom4.play();
      break;

    case "k":
      var tom4 = new Audio("./sounds/kick-bass.mp3");
      tom4.play();
      break;
    
    case "l":
      var tom4 = new Audio("./sounds/crash.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}



function buttonAnimation(currentKey) {
  var activeButton =  document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  
  }, 100)
}



// function handleClick()
//  var firstSound = new Audio ("./sounds/tom-1.mp3");
//  firstSound.play(); 
// }