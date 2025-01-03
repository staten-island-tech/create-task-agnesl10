import "../CSS/style.css";
import { randomWords } from "./words";
import { DOMSelectors } from "./dom";

function setWord(letter) {
  //classes: correct, present, incorrect
  DOMSelectors.tiles.classList.remove("correct", "present", "incorrect");
  //set the classes
  if (letter === "correct") {
    DOMSelectors.tiles.classlist.add("correct"); //add correct == css color change; same for the others ..
  } else if (letter === "present") {
    DOMSelectors.tiles.classlist.add("present");
  } else {
    DOMSelectors.tiles.classlist.add("incorrect");
  }
}

const random = randomWords[randomIndex];
console.log(random);

rows.forEach((input, index) => {
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
    `<div class="row" id="guess2" />
    <input type="text" maxlength="1" class="" id="tile1" />
    <input type="text" maxlength="1" class="" id="tile2" />
    <input type="text" maxlength="1" class="" id="tile3" />
    <input type="text" maxlength="1" class="" id="tile4" />
    <input type="text" maxlength="1" class="" id="tile5" />
    </div>`
  );
});
