import React, { Component } from 'react'
import Score from '../components/score'
import Question from '../components/question'

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentQuestion: {
                question: 'What is your quest?',
                correct_answer: 'To seek the holy grail.',
                incorrect_answers: [
                    'I don\'t know.',
                    'The perfect martini.',
                    'A shrubbery!'
                ]
            },
            score: 0,
            roundTotalQuestions: 3,
            questionCounter: 1
        }
    }

    render() {
        return (
            <div style={{border: '1px solid red', background: 'gray'}}>
                Game component
                <Score
                    score={this.state.score}
                    roundTotalQuestions={this.state.roundTotalQuestions}
                />
                <Question
                    questionCounter={this.state.questionCounter}
                    question={this.state.currentQuestion.question}
                    correctAnswer={this.state.currentQuestion.correct_answer}
                    incorrectAnswers={this.state.currentQuestion.incorrect_answers}
                />
            </div>
        )
    }
}
