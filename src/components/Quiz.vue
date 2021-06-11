<template>
    <div style="position:relative;">
        <div class="score">
            <span class="span-1">Score: </span>&nbsp;&nbsp;<span class="span-2">{{ quiz.score }}</span>
        </div>
        <Levels :level="quiz.currentIndexLevel" :levels="quiz.leves"/>
<!--        {{ quiz.getByValueQuestion('Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?')['correct_answer'] }}-->
        <div v-if="!quizOver">
            <ProgressBar :current-index-qestion="quiz.currentIndexQuestion" :max-length-questions="quiz.maxLenthQuestion"/>
            <h2>{{ question.question }}</h2>
            <p v-for="(item, idx) in question.option" :key="idx" @click="selectAnswere(item)"
               class="answerOptions"
               :class="{'selected': userAnswere == item}"
            >
                {{ item }}
            </p>

            <button class="btnSubmit" v-if="userAnswere !== null && !activeTerminateBtn" @click="next">Suivant</button>
            <button class="btnSubmit" v-if="activeTerminateBtn" @click="next">Terminer</button>
            <button class="btnSubmit" disabled v-else-if="userAnswere === null">Suivant</button>
        </div>

        <div v-else>
            <div class="stepsBtnContainer">
                <p class="successMsg" v-if="quiz.passed() && !quiz.decision()">Congratutlation ! You passed to next level</p>
                <p class="successMsg" v-else-if="quiz.decision() && quiz.passed()">Congratutlation ! You are expert. You done successfully the Quiz</p>
                <p class="failureMsg" v-else>Sorry ! You failled</p>
                <button class="btnResult success" v-if="quiz.passed() && !quiz.decision()" @click="nextLevel">Next Level</button>
                <button class="btnResult gameOver" v-else-if="quiz.decision() && quiz.passed()" @click="restart">Home</button>
                <button class="btnResult error" @click="redo" v-else><i class="fas fa-redo" style="font-size: 20px;"></i>&nbsp;&nbsp; Try again</button>
            </div>
            <div class="percentage">
                <div class="progressPercent">Average: {{ quiz.getPercentage() }}%</div>
                <div class="progressPercent">Score: {{ quiz.score }} / {{ quiz.maxLenthQuestion }}</div>
            </div>
            <div v-if="quiz.passed()">
                <div class="questions">
                    <div class="questionItem" v-for="(item, idx) in storeQuestions" :key="idx">
                        <h2 class="question">{{ item.question.question }}</h2>
                        <!--                        <div v-html="displayList(item.question.option, quiz.getByValueQuestion(item.question.question)['correct_answer'], item.userAnswer)"></div>-->
                        <ul>
                            <li v-for="opt in item.question.option" v-if="opt === item.userAnswer"
                                :class="{'rightAnswer': (compareTwoValue(opt, quiz.getByValueQuestion(item.question.question)['correct_answer'])), 'wrongAnswer': (opt === item.userAnswere && !compareTwoValue(item.userAnswere, quiz.getByValueQuestion(item.question.question)['correct_answer']))}">{{ opt }}

                                <span v-if="(compareTwoValue(opt, quiz.getByValueQuestion(item.question.question)['correct_answer']) &&
                        opt === item.userAnswere)"><i class="fas fa-check"></i></span>

                                <span v-if="(compareTwoValue(opt, quiz.getByValueQuestion(item.question.question)['correct_answer']) &&
                        !(opt === item.userAnswere))"><i class="fas fa-check"></i></span>

                                <span v-else-if="(opt === item.userAnswere && !compareTwoValue(item.userAnswere, quiz.getByValueQuestion(item.question.question)['correct_answer']))"><i class="fas fa-times"></i></span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Levels from "./Levels";
    import ProgressBar from "./ProgressBar";

    import {Quiz} from "../modules/modules";

    // import Swal from 'sweetalert2'

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    export default {
        name: "Quiz",
        components: {ProgressBar, Levels},
        data: () => {
            return {
                quiz: new Quiz(0, 0, 10),
                storeQuestions: [],
                question: {},
                userAnswere: null,
                activeTerminateBtn: false,
                quizOver: false
            }
        },
        methods: {
            selectAnswere: function (answere) {
                if (!(this.quiz.currentIndexQuestion < this.quiz.maxLenthQuestion - 1) && !this.levelOver)
                    this.activeTerminateBtn = true
                this.userAnswere = answere
            },
            next: function () {
                if (this.quiz.checkAnswere(this.userAnswere)) {
                    Toast.fire({
                        icon: 'success',
                        title: "Bravo ! Good answer"
                    })
                }else {
                    Toast.fire({
                        icon: 'error',
                        title: "Wrong answer !"
                    })
                }
                if (this.quiz.currentIndexQuestion < this.quiz.maxLenthQuestion - 1) {
                    this.storeQuestions.push({
                        question: this.question,
                        userAnswere: this.userAnswere
                    })
                    this.quiz.next()
                    this.question = this.quiz.currentQuestion()
                    this.userAnswere = null
                }else {
                    this.quizOver = true
                }
            },
            reset: function() {
                this.storeQuestions = []
                this.userAnswere = null
                this.activeTerminateBtn = false
                this.quizOver = !this.quizOver
                this.question = this.quiz.currentQuestion()
            },
            redo: function () {
                this.quiz.currentIndexQuestion = 0
                this.quiz.score = 0
                this.reset()
            },
            restart: function() {
                this.quiz = new Quiz(0, 0, 10)
                this.reset()
            },
            nextLevel: function () {
                this.quiz.nextLevel()
                this.reset()
            },
            displayList: function (list, answere, userAns) {
                let html = `<ul>`
                for (var i = 0; i < list.length; i ++ ) {
                    if (i === answere)
                        html += `<li class="rightAnswer">${list[i]} <span><i class="fas fa-check"></i></span></li>`
                    else if (i === userAns && userAns !== answere)
                        html += `<li class="wrongAnswer">${list[i]} <span><i class="fas fa-times"></i></span></li>`
                    else
                        html += `<li>${list[i]}</li>`
                }
                html += `</ul>`
              return html
            },
            compareTwoValue: function (val1, val2) {
                return (val1 === val2)
            }
        },
        mounted() {
            // this.storeQuestion = this.quiz.getQuestionByLevel(this.currentIndexLevel)
            this.question = this.quiz.currentQuestion()
        },
        computed: {
            // levelOver: function () {
            //     return !(this.quiz.currentIndexQuestion < this.quiz.maxLenthQuestion)
            // }
        }
    }
</script>

<style scoped>
    .answerOptions {
        padding: 10px;
        background-color: var(--light-grey-color);
        line-height: 20px;
        text-align: left;
        border: none;
        color: var(--black-color);
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 0;
        transition: all .5s;
    }

    .answerOptions:hover {
        background-color: var(--blue-color);
        -webkit-box-shadow: 0px 4px 16px -5px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 4px 16px -5px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 4px 16px -5px rgba(0, 0, 0, 0.75);
        cursor: pointer;
        color: var(--white-color);
        /*text-transform: uppercase;*/
    }

    .btnSubmit {
        font-size: 18px;
        padding: 6px;
        background-color: var(--blue-color);
        color: var(--white-color);
        border-color: var(--blue-color);
        border-radius: 5px;
        width: 195px;
        height: 46px;
        display: block;
        margin: 0 auto;
        cursor: pointer;
        /*opacity: .9;*/
    }

    /*.btnSubmit:hover{*/
    /*    opacity: .9;*/
    /*}*/

    .selected {
        /*background-color: var(--red-color);*/
        background-color: var(--blue-color);
        color: var(--white-color);
        text-transform: uppercase;
    }

    button {
        border: 1px solid;
    }

    .score {
        position: absolute;
        right: 98px;
        top: -71px;
        border: 1px solid var(--red-color);
        background: var(--red-color);
        height: 34px;
        width: 84px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 39px;
    }
    .score span.span-2 {
        font-size: 17px;
        color: var(--white-color);
    }
    .score span.span-1 {
        font-size: 14px;
        color: var(--white-color);
    }

    .questionItem {}
    .questionItem h2 {}
    .questionItem ul {
        text-align: left;
        margin: 0;
        padding: 0;
    }
    .questionItem ul li {
        list-style: none;
        display: block;
        margin: 6px 0;
        font-size: 15px;
    }
    .questionItem ul li span {
        margin-left: 15px;
    }
    .questionItem ul li.rightAnswer span {
        color: var(--green-color);
    }
    .questionItem ul li.wrongAnswer span {
        color: var(--red-color);
    }

</style>