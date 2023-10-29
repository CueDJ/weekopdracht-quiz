state = 0;
correctAnswer = 0;
players = 0;
multiplePlayersState = 1
timer2 = 0
function setup() {
    textAlign(CENTER, CENTER);
    createCanvas(800, 600);
    textSize(25);
    questionButton1 = new Button('', 100, 300, 250, 125, color('red'), color('`white`'));
    questionButton2 = new Button('', 450, 300, 250, 125, color('green'), color('white'));
    questionButton3 = new Button('', 100, 450, 250, 125, color('blue'), color('white'));
    questionButton4 = new Button('', 450, 450, 250, 125, color('#E7CF00'), color('white'));
    startGameButton = new Button('Start!', 300, 300, 200, 100, color('white'), color('black'));
    questionButton1.onClick = function () { questionButtonClicked(1) };
    questionButton2.onClick = function () { questionButtonClicked(2) };
    questionButton3.onClick = function () { questionButtonClicked(3) };
    questionButton4.onClick = function () { questionButtonClicked(4) };
    startGameButton.onClick = function () {
        if (players == 1) { state += 1 }
        else { state = 4 }
    };
    questionLogic = new allQuestions;
    gameState = new startEndFeedback;
}

function draw() {
    background(200)
    console.log()
    if (state == 0) {
        gameState.startScreen();
        if (players !== 0) {
            startGameButton.display();
            // if(players >= 2) {
            //     for (let index = 0; index < players; index++) {

            //     }
            // }
        }

    }
    else if (questionLogic.index2 > 3 && state == 1) {
        gameState.endScreen()
    }
    else if (state == 1) {
        questionLogic.display();
        questionButton1.display();
        questionButton2.display();
        questionButton3.display();
        questionButton4.display();
    }
    else if (state == 2) {
        gameState.wrong();
    }
    else if (state == 3) {
        gameState.right();
    }
    else if (state == 4) {

        if (multiplePlayersState < (players + 1)) {
            gameState.playerSwitch();
        }
        else {
            gameState.playerAnswers1 = questionLogic.playerAnswers
            gameState.index2 = questionLogic.index2
            gameState.multiplayerRightIncorrect();
            timer2 += deltaTime / 1000
            if (timer2 >= 2) {
                timer2 = 0
                state = 4
                multiplePlayersState = 1
                questionLogic.index2 += 1
            }
        }
    }

}
function questionButtonClicked(a) {
    questionLogic.clickedAnswer = a;
    questionLogic.questionClicked();
}

function keyPressed() {
    for (let index = 0; index < 5; index++) {
        if (keyCode == 48 + index) {
            players = 0 + index
        }
    }
}