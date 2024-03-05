//Add your import statements for View and Game here
import View from "./ttt-view";
const Game = require("../ttt_node/game")

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const v = new View(new Game(), document.querySelector('.ttt'));
});