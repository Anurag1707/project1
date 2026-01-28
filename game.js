let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winbox = document.querySelector(".winbox");
let resetBtn = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector("#msg");


let turnO = true; // player 0

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box dabya gya");
        // box.innerText = "Abs"
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }else{
            box.innerText ="X";
            turnO=true;
        }
        box.disabled=true;

        checkWin();

    });
});

const resetGame = () => {
    turnO = true;              // turn wapas O se start
    enabledboxes();
    winbox.classList.add("hide");

};

const disabledboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner =(winner) => {
    msg.innerText ="Congratulations, Winner is" + winner;
    winbox.classList.remove("hide");
    disabledboxes();
};

const checkWin= () =>{
    for( let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 == pos2 && pos2==pos3){
                console.log("winner", pos1);
                
                showWinner(pos1);

            }
        }
        
    }

};

newgame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)
