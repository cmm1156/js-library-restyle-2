
document.addEventListener('DOMContentLoaded', function(event) {

var rellax = new Rellax('.rellax');

new Glide('.glide').mount()
new Glide('.glide2').mount()
new Glide('.glide3').mount()

AOS.init();



var allCards = document.getElementsByClassName('indCard');
// var allCards = document.getElementById('cardDeck');

for (var i = 0; i < allCards.length; i++) {
  var thisCard = allCards[i];
  var randomSpeed = 2 + Math.random() * 5;
  thisCard.setAttribute('data-rellax-speed', randomSpeed);

}

});




let buttonA = document.getElementById("buttonA");
let buttonB = document.getElementById("buttonB");

buttonA.addEventListener("click", uiFunctionA);
buttonB.addEventListener("click", uiFunctionB);

let buttonDivA = document.getElementById("buttonDivA");
let buttonDivB = document.getElementById("buttonDivB");

function uiFunctionA() {
  console.log("true");
  let newSynopsis = document.createElement("DIV");
  newSynopsis.classList.add("synopsisPart2");
  newSynopsis.innerText = "He dances around a lot, ultimately doing a major number with a deck of cards. He dances with the queen, making the king jealous. He comes after Mickey with swords, and Mickey defends himself with a sewing needle";

  newSynopsis.style.display = "flex";
  newSynopsis.style.textAlign = "center";
  newSynopsis.style.marginLeft = "10vw";
  newSynopsis.style.marginRight = "10vw";
  newSynopsis.style.fontSize = "2.5rem";
  newSynopsis.style.fontFamily = "\'Volkhov\', serif";
  newSynopsis.style.backgroundColor = "#e6e6cf";
  newSynopsis.style.padding = "10px";
  newSynopsis.style.marginTop = "20px";
  newSynopsis.style.marginBottom = "20px";

  newSynopsis.setAttribute("data-aos", "fade-down");

  buttonDivA.appendChild(newSynopsis);
}


function uiFunctionB() {
  console.log("true");
  let newSynopsis2 = document.createElement("DIV");
  newSynopsis2.classList.add("synopsisPart3");
  newSynopsis2.innerText = "Mickey gets the upper hand, and the king calls for reinforcements. Mickey finds himself chased by several decks, which throw their spots at him. He turns on a fan and blows them away, back through the mirror, where his alarm is ringing.";

  newSynopsis2.style.display = "flex";
  newSynopsis2.style.textAlign = "center";
  newSynopsis2.style.marginLeft = "10vw";
  newSynopsis2.style.marginRight = "10vw";
  newSynopsis2.style.fontSize = "2.5rem";
  newSynopsis2.style.fontFamily = "\'Volkhov\', serif";
  newSynopsis2.style.backgroundColor = "#e6e6cf";
  newSynopsis2.style.padding = "10px";
  newSynopsis2.style.marginTop = "20px";
  newSynopsis2.style.marginBottom = "20px";

  newSynopsis2.style.transition = "2s";

  newSynopsis2.setAttribute("data-aos", "fade-down");

  buttonDivB.appendChild(newSynopsis2);
}


buttonDivA.style.fontFamily = "Roboto Condensed";
buttonDivA.style.marginBottom = "20px;"

buttonDivB.style.fontFamily = "Roboto Condensed";
buttonDivB.style.marginBottom = "20px;"




// spacer
