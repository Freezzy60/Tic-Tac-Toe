let turn = "x";
let gameOver = false;

const changeTurn = () => {
    return turn === "x" ? "0" : "x";
};

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];

    win.forEach((e) => {
        // condition for checking if 0 == 1 && 2 == 1 && 0 is not equal to empty
        if (
            boxtext[e[0]].innerText == boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText == boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            //if condition pass then add e[0] if cold be x or o + "won"
            document.getElementById("info").innerText =
                boxtext[e[0]].innerText + "won";
            //game over should be true
            gameOver = true;
            //selectin a img box and giving width to img for showing winning image after won
            document
                .querySelector(".imgbox")
                .getElementsByTagName("img")[0]
                .classList.add("imgwidth");
            //transforming a line based on winning position
            document.querySelector(
                ".line"
            ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").classList.add("linewidth");
        }
    });
};

//Adding a click event listener to boxes
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    //adding click event listener to boxes
    element.addEventListener("click", () => {
        //if innerText of boxtext is empty then it would be equal to turn
        if (boxtext.innerText == "") {
            boxtext.innerText = turn;
            //assign a turn to changeTurn function
            turn = changeTurn();
            checkWin();
            //if game is not over we should print "turn for" + turn we'll get value of turn from above function
            if (!gameOver) {
                document.getElementById("info").innerHTML = "Turn for " + turn;
            };
        };
    });
});

//--- Reset button functionality ---//
//reset button function
reset.addEventListener("click", () => {
    //selecting all boxes using queryselectAll
    let boxtext = document.querySelectorAll(".boxtext");
    //clear each boxtext element to empty after clicking reset button
    Array.from(boxtext).forEach((element) => {
        element.innerText = "";
    });
    //after reset turn always would be equal to "x"
    turn = "x";
    gameOver = false;
    //print "turn for" + turn = "x"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    //hiding winning image after reset by giving styling width 0
    document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0]
        .classList.remove("imgwidth");
    document.querySelector(".line").classList.remove("linewidth");
});