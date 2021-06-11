function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


export class Quiz {

    constructor(currentIndexLevel = 0, currentIndexQuestion = 0, maxLengthQuestion = 10) {
        this.currentIndexLevel = currentIndexLevel
        this.currentIndexQuestion = currentIndexQuestion
        this.maxLenthQuestion = maxLengthQuestion
        this.score = 0

        this.data = require('../data/data')
        this.leves = ['easy', 'medium', 'hard']
    }

    getData() {
        return this.data
    }
    
    getLeves() {
        return ['Easy', 'Medium', 'Hard']
    }
    
    getLevel(level) {
        return this.leves[level]
    }

    nextLevel() {
        if (this.currentIndexLevel < this.leves.length) {
            this.currentIndexLevel = this.currentIndexLevel + 1
            this.score = 0
            this.currentIndexQuestion = 0
        }else {
            console.log('condiation non respecter')
        }
    }

    getByValueQuestion(val) {
        const questions = this.getQuestionByLevel(this.currentIndexLevel)
        var question = {}
        var found = false, len = questions.length - 1
        while (!found && len >= 0) {
            if (questions[len].question === val) {
                found = true
                question = questions[len]
            }
            len --
        }
        return question
    }

    // get questions by level
    getQuestionByLevel(level) {
        const quiz = this.data.quiz[this.leves[level]]
        return quiz['results']
    }

    // get question by index
    getQuestion(idx) {
        const question = this.getQuestionByLevel(this.currentIndexLevel)[idx]
        this.question = question
        return question
    }

    // get current question
    currentQuestion() {
        if (this.currentIndexQuestion < this.maxLenthQuestion) {
            const question = this.getQuestion(this.currentIndexQuestion)
            let options = []
            let tmp = question.incorrect_answers
            const correct_answer = question.correct_answer
            tmp.push(correct_answer)

            // remove any doublon
            for(var i = 0; i < tmp.length; i ++) {
                var doublon = false
                for(var j = 0; j < options.length; j ++) {
                    if (tmp[i] == options[j])
                        doublon = true
                }
                if (!doublon)
                    options.push(tmp[i])
            }

            return {
                question: question.question,
                option: shuffle(options)
            }
        }
        else{
            console.log('max atteind')
            return null
        }

    }

    checkAnswere(answer) {
        const rightAnswere = this.getQuestion(this.currentIndexQuestion)['correct_answer']
        if (rightAnswere === answer) {
            this.score ++
            return true
        }
        return false
    }

    next() {
        if (this.currentIndexQuestion < this.maxLenthQuestion)
            this.currentIndexQuestion ++
        else {
            console.log('end question finish')
        }
    }

    getPercentage() {
        const avrage = (this.score / this.maxLenthQuestion) * 100
        return avrage
    }

    passed () {
        if (this.score >= (this.maxLenthQuestion / 2 ))
            return true
        else
            return false
    }

    //make the final decision
    decision () {

        // console.log('length: ', this.leves.length)
        if ((this.currentIndexLevel == this.leves.length - 1)) {
            return true
        }
        return false
    }


}

export function formatText(text) {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
}

