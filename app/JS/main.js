import "../CSS/style.css";
import { randomWords } from "./words";
import { DOMSelectors } from "./dom";

const target = randomWords[Math.floor(Math.random() * randomWords.length)].word;
console.log(target);

function setWord(letter) {
  const targetWord = target.toUpperCase();

  if ((DOMSelectors.input = "")) {
    alert("there seems to be missing information. check it out.");
  }

  let index = 0;
  DOMSelectors.button.addEventListener("click", function (e) {
    DOMSelectors.tiles.classList.remove("correct", "present", "incorrect");
    //set the classes
    if (letter === input[index]) {
      DOMSelectors.tiles.classlist.add("correct"); //add correct == css color change; same for the others ..
    } else if (targetWord.includes(letter[index])) {
      DOMSelectors.tiles.classlist.add("present");
    } else {
      DOMSelectors.tiles.classlist.add("incorrect");
    }
    index = index + 1;
  });
}
setWord();
DOMSelectors.rows.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === input.maxLength) {
      const nextInput = input[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });
});

DOMSelectors.button.addEventListener("click", function (e) {
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
});
