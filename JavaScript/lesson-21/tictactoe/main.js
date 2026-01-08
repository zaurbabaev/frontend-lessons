const squares = document.querySelectorAll(".game-square");
const heading = document.getElementById("game-heading");
const restartBtn = document.getElementById("restart-button");

let currentPlayer = "O";
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


squares.forEach(btn => {
    if (btn.textContent != "") {
        btn.disabled = true;
    }
});

squares.forEach((square, index) => {
    square.addEventListener("click", () => {
        if (!gameActive) return;
        square.textContent = currentPlayer;
        square.disabled = true;

        if (checkWinner()) {
            heading.textContent = `Player ${currentPlayer} Wins`;
            endGame();
            return;
        }
        if (isDraw()) {
            heading.textContent = "Draw";
            endGame();
            return;
        }

        currentPlayer = currentPlayer === "O" ? "X" : "O";
        heading.textContent = `Player ${currentPlayer}'s Turn`;
    });

});


/* function checkWinner() {
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;

        return (squares[a].textContent &&
            squares[a].textContent === squares[b].textContent &&
            squares[a].textContent === squares[c].textContent
        );
    });
} */

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (squares[a].textContent &&
            squares[a].textContent === squares[b].textContent &&
            squares[a].textContent === squares[c].textContent
        ) {
            squares[a].classList.add("winner");
            squares[b].classList.add("winner");
            squares[c].classList.add("winner");
            return true;
        }
    }
    return false;

}
function isDraw() {
    return [...squares].every(btn => btn.textContent !== "");
}

function endGame() {
    gameActive = false;
    restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
    squares.forEach(btn => {
        btn.textContent = "";
        btn.disabled = false;
        btn.classList.remove("winner");
    });

    currentPlayer = "O";
    gameActive = true;
    heading.textContent = "Player O's Turn";
    restartBtn.style.display = "none";
})


