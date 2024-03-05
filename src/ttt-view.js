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
      ul.appendChild(li);
    }
    ul.addEventListener('click', this.handleClick.bind(this))
    return ul;
  }
  /**
   *
   * @param {Event} e
   */
  handleClick(e) {
    e.stopPropagation()
    if(this.game.isOver()) return;
    this.makeMove(e.target)



  }

  makeMove(square) {
    const player = this.game.currentPlayer
    try {
      this.game.playMove(JSON.parse(square.dataset.pos))
      square.innerText = player === 'x' ? "❌" : "⭕";
      square.classList.add(player)
      if (this.game.isOver()){
        this.handleGameOver()
      }
    } catch(e) {
      alert('Invalid move. Please try again')
    }

  }

  handleGameOver() {
    for(const ele of document.querySelectorAll(`.${this.game.winner()}`)){
      ele.classList.add('winner')
    }
    setTimeout(()=>{
      alert(`${this.game.winner()} wins!`)}, 100)

  }
}

export default View;
