import "../CSS/style.css";
import { randomWords } from "./words";
import { DOMSelectors } from "./dom";
//attempts
//check if right or wrong
//then update attempts
const target = randomWords[Math.floor(Math.random() * randomWords.length)].word;
console.log(target);



function setWord() {

  const targetWord = target.toUpperCase();
  const attempts = 6;


  DOMSelectors.button.addEventListener("click", function (e) {
    if ((DOMSelectors.input = "")) {
      alert("there seems to be missing information. check it out.");
    }
  });



  while (i = 0, i < attempts, i++){
    DOMSelectors.button.addEventListener("click", function (e) {
      DOMSelectors.tiles.classList.remove("correct", "present", "incorrect");
    //set the classes
      input.forEach((letter) => {
      if (letter === input) {
      DOMSelectors.tiles.classlist.add("correct"); //add correct == css color change; same for the others ..
      } else if (targetWord.includes(input)) {
      DOMSelectors.tiles.classlist.add("present");
      } else {
      DOMSelectors.tiles.classlist.add("incorrect");
      }})}


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
      })
  };

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


