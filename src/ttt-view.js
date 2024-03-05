class View {
  /**
   * 
   * @param {Game} game 
   * @param {HTMLElement} el <figure class="ttt">
   */
  constructor(game, el) {
    this.game = game
    el.appendChild(this.setupBoard());
  }
  
  setupBoard() {
    //<li data-pos="[0,0]"></li>
    let ul = document.createElement("ul")
    for (let i = 0; i < 9; i ++) {
      let li = document.createElement('li')
      li.setAttribute("data-pos", `[${Math.floor(i / 3)},${i % 3}]`)
      li.addEventListener('click', this.handleClick.bind(this))
      ul.appendChild(li);

    }
    return ul;
  }
  /**
   * 
   * @param {Event} e 
   */
  handleClick(e) {
    alert(JSON.parse(e.target.dataset.pos))
  }

  makeMove(square) {

  }
  
  handleGameOver() {

  }
}

export default View;