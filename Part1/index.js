const progress = []


function play(clicked){
    const playerSpan = document.getElementById("player") 
    const boxClicked = document.getElementById(clicked)
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        boxClicked.innerText = "X"
        progress[clicked] = 'X'
    }
    else {playerSpan.innerText = 'X'
        boxClicked.innerText = "O"
        progress[clicked] = 'O'
    }
    console.log(progress)
}
       