const progress = []


function play(clicked){
    const playerSpan = document.getElementById("player") 
    const boxClicked = document.getElementById(clicked)
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        boxClicked.innerText = "X"
        progress[clicked] = 'X'
        // winCheck()
    }else {
        playerSpan.innerText = 'X'
        boxClicked.innerText = "O"
        progress[clicked] = 'O'
    }
    console.log(progress)
    // let winCheck(){
    //     if( progress === progress['X','X','X'])
    // }
    let topLeft = progress[0]
    let topMiddle = progress[1]
    let topRight = progress[2]
    let middleLeft = progress[3]
    let middleMiddle = progress[4]
    let middleRight = progress[5]
    let bottomLeft = progress[6]
    let bottomMiddle = progress[7]
    let bottomRight = progress[8]
}

// window.alert("yo!")       