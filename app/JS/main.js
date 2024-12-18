import "../CSS/style.css";
import { randomWords } from "./words";
import { DOMSelectors } from "./dom";

function setColor(letter) {
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
