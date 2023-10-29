// questions array breakdown: pos 0 is the text for the question, pos 1,2,3,4 are the potential question answers the user can enter, pos 5 is the correct answer of the question
// pos 6 keeps count of the score for later use, pos 7 detects if the user has already entered something and disables it if its true, pos 8 is the users input.
// the order is weird because i used a diffrent system which wasn't viable for later use.



class allQuestions {

    questions = [
        ['What country has the highest life expectancy?', 'Hong Kong', 'China', 'The Netherlands', 'Japan', 1, 0, false, ''],
        ['Which of these is the second biggest company in South Korea?', 'Samsung', 'SK', 'Hyundai', 'LG', 4, 0, false, ''],
        ["What's the city with the most diversity in terms of language?", 'San Francisco', 'New York City', 'Manchester', 'Toronto', 2, 0, false, ''],
        ['What is often seen as the smallest unit of memory?', 'Kilobit', 'Megabit', 'KiloByte', 'MegaByte', 3, 0, false, '']
    ];
    playerAnswers = [
        ['incorrect', 'incorrect', 'incorrect', 'incorrect'],
        ['incorrect', 'incorrect', 'incorrect', 'incorrect'],
        ['incorrect', 'incorrect', 'incorrect', 'incorrect'],
        ['incorrect', 'incorrect', 'incorrect', 'incorrect']
    ]
    index2 = 0;
    finalscore = 0;
    clickedAnswer;

    correctAnswer2;
    display() {
        rect(100, 25, 600, 150)
        fill('black')
        textSize(20)
        text(this.questions[this.index2][0], 800 / 2, 200 / 2)

        textSize(25)
        questionButton1.text = this.questions[this.index2][1]
        questionButton2.text = this.questions[this.index2][2]
        questionButton3.text = this.questions[this.index2][3]
        questionButton4.text = this.questions[this.index2][4]
    }


    questionClicked() {
        if (this.questions[this.index2][7] == false) {
            this.questions[this.index2][8] = this.clickedAnswer
            if (this.questions[this.index2][5] == this.questions[this.index2][8]) {
                if (players == 1) {
                    this.questions[this.index2][6] = 1
                }
                else {
                    this.playerAnswers[multiplePlayersState - 1][this.index2] = 'Correct'
                    multiplePlayersState += 1
                    console.log(this.playerAnswers)
                }
                if (players == 1) {
                    state += 2
                }
                else {
                    state = 4
                }
            }
            else {
                if (players == 1) {
                    state += 1
                }
                else {
                    multiplePlayersState += 1
                    state = 4
                }
                this.correctAnswer2 = this.questions[this.index2][5]
            }
            if (players == 1) { this.questions[this.index2][7] = true }
            console.log(this.questions[this.index2][8])
            correctAnswer = this.questions[this.index2][this.correctAnswer2]
        }
        if (players == 1) {
            this.index2 += 1
        }
    }
}