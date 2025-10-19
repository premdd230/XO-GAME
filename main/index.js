let winning_pattern=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let playerX=[];
let playerO=[];
// function used to clear arrays
function clear_array() {
      playerO.length = 0;
      playerX.length = 0;
      console.log(playerO + playerX + " after reset");
}
// this code used to reset the game
function reset() {
      let cards = document.getElementsByClassName("card");
      for (let card of cards) {
        card.innerHTML = "";
      }
      clear_array()
      markq.classList.remove("add");
      console.clear();
}

let markq = document.getElementById("hide");
function add(winner) {
    //let markq = document.getElementById("hide");
      markq.classList.add("add");
      markq.innerHTML=winner;
}


// bellow check the winning pattern if matched clear array and card X and O value  

function check() {

  winning_pattern.forEach((e)=>{
    let index1 = e[0];
    let index2 = e[1];
    let index3 = e[2];
    if (playerX.includes(index1) && playerX.includes(index2) && playerX.includes(index3)) {
        let play_1 = "Player X winning";
        setTimeout(() => alert(play_1), 800); //settimeout deley the alert to show the last onclick card print
        //alert(play_1);

        let cards = document.getElementsByClassName("card");
        setTimeout(() => {
            for (let card of cards) {
            card.innerHTML = "";
        }
        }, 1000);
        clear_array()
        add(play_1);
        }

    else if(playerO.includes(index1) && playerO.includes(index2) && playerO.includes(index3)) {
        let play_2 = "Player O winning"
        setTimeout(() => alert(play_2), 800);
        //alert(play_2);
        let cards = document.getElementsByClassName("card");
        setTimeout(() => {
            for (let card of cards) {
            card.innerHTML = "";
        }
        }, 1000);
        clear_array()
        add(play_2)
        }
    else {
      //console.log("not matching with winning pattern");
    }

  })
  
}


// bellow code used to write X and O on cards
let currentPlayer = "X"; 

    document.querySelector(".container").addEventListener("click", (e) => {
        //console.log("check");
        
        if (e.target.classList.contains("card")) {
          
          const content = (e.target.textContent).trim();
          //alert(content)
          if (content === "") {
            e.target.textContent = currentPlayer;
            markq.classList.remove("add");
            let card_no = parseInt(e.target.id);
            currentPlayer === "X" ? playerX.push(card_no) : playerO.push(card_no);
            console.log(`Clicked cell ${card_no} by ${currentPlayer}`);
            check();
            // Switch player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
    });





