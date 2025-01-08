import "../CSS/style.css";
import { randomWords } from "./words";
import { DOMSelectors } from "./dom";

//attempts
//check if right or wrong
//then update attempts

const target = randomWords[Math.floor(Math.random() * randomWords.length)].word;
console.log(target);
let attempts = 0;

function setWord() {
  const targetWord = target.toUpperCase();

  DOMSelectors.button.addEventListener("click", function (e) {
    if ((DOMSelectors.input = "")) {
      alert("there seems to be missing information. check it out.");
    }
    addRow();
  });
}

function addRow() {
  if (attempts < 5) {
    attempts = attempts + 1;
    console.log(attempts);
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="row" id="guess" />
        <input type="text" maxlength="1" class="" id="tile1" />
        <input type="text" maxlength="1" class="" id="tile2" />
        <input type="text" maxlength="1" class="" id="tile3" />
        <input type="text" maxlength="1" class="" id="tile4" />
        <input type="text" maxlength="1" class="" id="tile5" />
      </div>`
    );
  } else {
    alert("thats the last guess. you suck.");
  }
}

setWord();

DOMSelectors.rows.forEach((tiles, index) => {
  DOMSelectors.tiles.addEventListener("input", () => {
    if (tiles.value.length === tiles.maxLength) {
      const nextInput = tiles[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });
});
DOMSelectors.rows.forEach((input) => console.log(input));
