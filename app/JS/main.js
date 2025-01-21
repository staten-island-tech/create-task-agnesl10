import "../CSS/style.css";
import { randomWords } from "./words";
import { DOMSelectors } from "./dom";

//attempts
//check if right or wrong
//then update attempts

const target = randomWords[Math.floor(Math.random() * randomWords.length)].word;
const targetWord = target.toUpperCase();
console.log(targetWord);
let attempts = 0;

function setWord() {
  DOMSelectors.button.addEventListener("click", function (event) {
    event.preventDefault();
    if ((DOMSelectors.tiles.value = "")) {
      alert("there seems to be missing information. check it out.");
    } else {
      innerFunc();
    }
  });
}

let index = 0;

function innerFunc() {
  let guess = "";
  let i = 0

  document.querySelectorAll("#tile").forEach((tile) => {
    if (tile.getAttribute("data-row") === `${index}`) {
      guess = guess + `${tile.value}`.toUpperCase();
      if (guess[i] === targetWord[i]){
        tile.classList.add("correct")
        i++
      } else if (targetWord.includes(guess[i])){
        tile.classList.add("present")
        i++
      } else{
        tile.classList.add("incorrect")
        i++
        }
    }
  })
  console.log("guess is", guess);
  
  
  if (targetWord == guess) {
    console.log("word is guessed.")
    DOMSelectors.tiles.forEach((tile) => tile.classList.add("correct"))
    DOMSelectors.btndiv.innerHTML = "";
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<h1>you got it!!</h1>`
    );
  } else if (attempts < 5) {
    attempts += 1;
    console.log("attempts is", attempts);
    index += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="row" id="guess" />
        <input type="text" maxlength="1" class="" id="tile" data-row="${index}"/>
        <input type="text" maxlength="1" class="" id="tile" data-row="${index}"/>
        <input type="text" maxlength="1" class="" id="tile" data-row="${index}"/>
        <input type="text" maxlength="1" class="" id="tile" data-row="${index}"/>
        <input type="text" maxlength="1" class="" id="tile" data-row="${index}"/>
      </div>`
    );
    console.log(index);
  } else {
    alert(`thats the last guess. the word was ${targetWord}`);
  }
}

setWord();

