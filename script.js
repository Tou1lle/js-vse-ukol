let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(box => {
    box.innerHTML = "";
    box.addEventListener("click", () => {
        if(!isGameOver && box.innerHTML === "") {
            box.innerHTML = turn;

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

        if (v0 != "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
        }
    }
}

function checkDraw() {

}