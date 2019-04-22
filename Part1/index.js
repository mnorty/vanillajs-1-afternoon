const progress = []


function play(clicked){
    const playerSpan = document.getElementById("player") 
    const boxClicked = document.getElementById(clicked)

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        boxClicked.innerText = "X"
        progress[clicked] = 'X'
        
    }else {
        playerSpan.innerText = 'X'
        boxClicked.innerText = "O"
        progress[clicked] = 'O'
    }



    let topLeft = progress[0]
    let topMiddle = progress[1]
    let topRight = progress[2]
    let middleLeft = progress[3]
    let middleMiddle = progress[4]
    let middleRight = progress[5]
    let bottomLeft = progress[6]
    let bottomMiddle = progress[7]
    let bottomRight = progress[8]

    // if (!topLeft === topMiddle && topMiddle === topRight)

    if (topLeft !== undefined && topLeft === topMiddle && topMiddle === topRight) {
        alert(`${topLeft} is the winner`);
        return; //will declare winner if topleft is clicked
    }
    if (middleLeft !== undefined && middleLeft === middleMiddle && middleMiddle === middleRight) {
        alert(`${middleLeft} is the winner`);
        return; //done
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomMiddle === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;  //done
    }
    if (topLeft !== undefined && topLeft === middleLeft && middleLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return; //working
    }
    if (topMiddle !== undefined && topMiddle === middleMiddle && middleMiddle === bottomMiddle) {
        alert(`${topMiddle} is the winner`);
        return; //done
    }
    if (topRight !== undefined && topRight === middleRight && middleRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleMiddle && middleMiddle === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (topRight !== undefined && topRight === middleMiddle && middleMiddle === bottomLeft) {
        alert(`${bottomLeft} is the winner`);
        return;
    }




    // !topLeft === undefined OR topLeft !== undefined
    // function winCheck(){
    //     if(!topLeft === topMiddle && topMiddle === topRight){
    //         window.alert('You Win!')
    //         }
    //     }

    
    console.log(progress)
    // winCheck()

}

// window.alert("yo!")       