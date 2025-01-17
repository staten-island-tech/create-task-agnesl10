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
      addRow();
    }
  });
}

let index = 0;

function addRow() {
  let guess = "";
  document.querySelectorAll("#tile").forEach((tile) => {
    if (tile.getAttribute("data-row") === `${index}`) {
      guess = guess + `${tile.value}`.toUpperCase();
    }
  });
  console.log("guess is", guess);

  if (targetWord == guess) {
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
    alert("thats the last guess. you suck.");
  }
}

function checkGuess() {
  let guess = "";
  document.querySelectorAll("#tile").forEach((tile) => {
    if (tile.getAttribute("data-row") === `${index}`) {
      guess = guess + `${tile.value}`.toUpperCase();
    }
  });
  console.log("guess is", guess);
  //compare this guess with the word
  if (guess == targetWord) {
    console.log("You Win!");
  }
}

function clearGuess(guess) {
  guess = "";
  console.log(guess);
}

setWord();

// DOMSelectors.rows.forEach((tiles, index) => {
//   DOMSelectors.tiles.addEventListener("input", () => {
//     if (tiles.value.length === tiles.maxLength) {
//       const nextInput = tiles[index + 1];
//       if (nextInput) {
//         nextInput.focus();
//       }
//     }
//   });
// });
