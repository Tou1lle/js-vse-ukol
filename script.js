let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(box => {
    box.innerHTML = "";
    box.addEventListener("click", () => {
        if(!isGameOver && box.innerHTML === "") {
            box.innerHTML = turn;
        }
    })
})