// function playNow() {
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection)



//     // show the playground

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection)
//  }
function handlerKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
     
    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver()
     };

    // get the expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);
    
    // check matched or not 
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point', expectedAlphabet);
        
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);



        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;


        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {



        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);


        if (updateLife === 0) {
        gameOver()
        }

        // console.log('you missed and you lose a life ');
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const updateLife = currentLife - 1;
        // currentLifeElement.innerText = updateLife;


        

    }

}
// capture keyboard key press
document.addEventListener('keyup', handlerKeyboardButtonPress)

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your alphabet is :', alphabet);
    // get randomly generate alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}


function play() {
    // hide everything only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}


function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);


    const currentAlphabet = getElementById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}