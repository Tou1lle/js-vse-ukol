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

//Changing turns as in the Tic Tac Toe game, for better UI change background color on top
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

}

function checkDraw() {

}