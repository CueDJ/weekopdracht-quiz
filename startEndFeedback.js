class startEndFeedback {

    timer = 0;
    intervala = 2;
    playerAnswers1 = []
    index2 = 0
    player1Won = 0
    player2Won = 0
    player3Won = 0
    player4Won = 0

    startScreen() {
        textSize(40)
        fill('black')
        text('Short Basic knowledge quiz!', 400, 150)
        textSize(25)
        text('Press 1,2,3,4 for amount of players!', 400, 200)
        text('players: ' + players, 400, 250)
    }
    wrong() {
        fill('red')
        rect(0, 0, 800, 600)
        fill('white')
        textSize(40)
        text('incorrect!', 400, 300)
        textSize(25)
        text('Correct answer:', 400, 400)
        text(correctAnswer, 400, 450)
        this.timer += deltaTime / 1000
        if (this.timer >= 2) {
            this.timer = 0
            state = 1
        }
    }
    right() {
        fill('lime')
        rect(0, 0, 800, 600)
        fill('white')
        textSize(40)
        text('Correct!', 400, 300)
        textSize(25)

        this.timer += deltaTime / 1000
        if (this.timer >= 2) {
            this.timer = 0
            state = 1
        }
    }
    playerSwitch() {
        fill('blue')
        rect(0, 0, 800, 600)
        fill('white')
        text('Player ' + multiplePlayersState + "'s turn!", 400, 300)
        this.timer += deltaTime / 1000
        if (this.timer >= 2) {
            this.timer = 0
            state = 1
        }
    }
    endScreen() {
        fill('black')
        textSize(40)
        text('Thank you for playing!', 400, 300)
    }
    multiplayerRightIncorrect() {
        fill('blue')
        rect(0, 0, 800, 600)
        fill('white')
        text('Correct answer:', 400, 200)
        text(correctAnswer, 400, 250)
        for (let index = 0; index < players; index++) {
            text('Player ' + (index + 1) + ': ' + this.playerAnswers1[index][this.index2] + '!', 400, 300 + 50 * index)
        }
    }
}