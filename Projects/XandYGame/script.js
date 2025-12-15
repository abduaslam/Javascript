 let turn = "X";
    const title = document.getElementById("title");

    function game(id) {
      const element = document.getElementById(id);
      if (element.innerHTML !== "" || title.innerHTML.includes("wins")) return;

      element.innerHTML = turn;

      if (checkWinner()) {
        title.innerHTML = `${turn} wins! 🎉`;
        setTimeout(resetGame, 1500); // auto reset after 1.5 seconds
        return;
      }

      if (checkDraw()) {
        title.innerHTML = `Draw! 🤝`;
        setTimeout(resetGame, 1500); // auto reset on draw
        return;
      }

      turn = turn === "X" ? "O" : "X";
      title.innerHTML = `Turn: ${turn}`;
    }

    function checkWinner() {
      const squares = [];
      for (let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
      }

      const winPatterns = [
        [1,2,3],[4,5,6],[7,8,9],
        [1,4,7],[2,5,8],[3,6,9],
        [1,5,9],[3,5,7]
      ];

      for (let pattern of winPatterns) {
        const [a,b,c] = pattern;
        if (squares[a] !== "" && squares[a] === squares[b] && squares[b] === squares[c]) {
          return true;
        }
      }
      return false;
    }

    function checkDraw() {
      for (let i = 1; i <= 9; i++) {
        if (document.getElementById("item" + i).innerHTML === "") return false;
      }
      return true;
    }

    function resetGame() {
      for (let i = 1; i <= 9; i++) {
        document.getElementById("item" + i).innerHTML = "";
      }
      turn = "X";
      title.innerHTML = "Turn: X";
    }
