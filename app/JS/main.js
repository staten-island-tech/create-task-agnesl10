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

function addRow() {
  checkGuess();

  if (attempts < 5) {
    attempts = attempts + 1;
    console.log("attempts is", attempts);
    let index = 2;
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
    index = index + 1;
  } else {
    alert("thats the last guess. you suck.");
  }
}

function checkGuess() {
  let guess = "";
  let num = 1;
  document.querySelectorAll("#tile").forEach((tile) => {
    if (tile.getAttribute("data-row") === `${num}`) {
      guess = guess + `${tile.value}`.toUpperCase();
    }
  });
  num = num + 1;
  console.log("number is", num);
  console.log("guess is", guess);

  let i = 0;

  /*  for (guess[i] in guess) {
    DOMSelectors.tiles.className.remove("correct", "incorrect", "present");
    if (guess[i] === targetWord[i]) {
      DOMSelectors.tiles.classList.add("correct");
      i = i + 1;
      clearGuess(guess);
    } else if (targetWord.includes(guess[i])) {
      DOMSelectors.tiles.classList.add("present");
      i = i + 1;
      clearGuess(guess);
    } else {
      DOMSelectors.tiles.classList.add("incorrect");
      i = i + 1;
      clearGuess(guess);
    }
  } */
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
