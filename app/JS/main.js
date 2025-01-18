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
  document.querySelectorAll("#tile").forEach((tile) => {
    if (tile.getAttribute("data-row") === `${index}`) {
      guess = guess + `${tile.value}`.toUpperCase();
    }
  })
  console.log("guess is", guess);

  for (let i = 1; i <= 5; i++){
    DOMSelectors.tiles.forEach((tile) => {
      if (guess[i] === targetWord[i]){
        tile.classList.add("correct")}
      else if (targetWord.includes(guess[i])){
        tile.classList.add("present")
      } else{
        tile.classList.add("incorrect")
      }
    })
  }
  
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
