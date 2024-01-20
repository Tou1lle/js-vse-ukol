let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

const playerX = createPlayer("Player X", "X");
const playerO = createPlayer("Player O", "O");

boxes.forEach(box => {
    box.innerHTML = "";
    box.addEventListener("click", () => {
        if(!isGameOver && box.innerHTML === "") {
            box.innerHTML = turn;

            // Check after every move if win/draw and change turn
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})

// Changing turns as in the Tic Tac Toe game, for better UI change background color on top
function changeTurn() {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    } else {
        turn = "X";
        document.querySelector(".bg").style.left = "0px";
    }
}

// Check winner of the game
function checkWin() {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonal
    ]

    // Check if there are three same X/O based on conditions
    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        // Change Color and display buttons if one either X / O wins
        if (v0 != "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " Wins!";
            document.querySelector("#play-again").style.display = "inline";

            for (j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6";
                boxes[winConditions[i][j]].style.color = "#000";
            }
        }
    }
}

// Check if it's draw
function checkDraw() {
    if (!isGameOver) {
        let isDraw = true;
        
        boxes.forEach(box => {
            if (box.innerHTML === "") {
                isDraw = false;
            }
        })

        if (isDraw) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw!";
            document.querySelector("#play-again").style.display = "inline";
        }
    }
}

document.querySelector("#play-again").addEventListener("click", () => {
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0px";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.removeProperty("background-color");
        box.style.color = "#fff";
    })
})

// create a player with marker either X or O, initial score is 0
function createPlayer(name, mark) {
    return {
        name: name,
        mark: mark,
        score: 0,
    };
}