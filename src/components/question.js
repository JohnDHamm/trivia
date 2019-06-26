import React, { Component } from 'react'
import AnswerButton from './answer_button'
import styled from 'styled-components'
import sharedStyles from '../styles/shared_styles'

const Container = styled.div`
    background: #DDD;
    min-height: 100vh;
    `
const AnswersContainer = styled.div`
    width: 75%;
    max-width: 800px;
    margin: 0 auto;

    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL}) {
        width: 90%;
    }
`

export default class Question extends Component {

    renderAnswers() {
        const { incorrect_answers, correct_answer } = this.props.currentQuestion
        const displayAnswers = []
        incorrect_answers.forEach(answer => {
            displayAnswers.push({
                answer,
                isCorrectAnswer: false
            })
        })
        const correctAnswer = {
            answer: correct_answer,
            isCorrectAnswer: true
        }
        const ranNum = Math.floor(Math.random() * Math.floor(incorrect_answers.length + 1))
        displayAnswers.splice(ranNum, 0, correctAnswer)

        return displayAnswers.map((answer, index) => {
            return (
                <AnswerButton
                    key={index}
                    answer={answer.answer}
                    isCorrectAnswer={answer.isCorrectAnswer}
                    submitAnswer={(isCorrectAnswer) => this.props.submitResult(isCorrectAnswer)} />
            )
        })
    }

    render() {
        return (
            <Container>
                <p>Question #{this.props.questionCounter}</p>
                <p>{this.props.currentQuestion.question}</p>
                <AnswersContainer>
                    {this.renderAnswers()}
                </AnswersContainer>
            </Container>
        )
    }
}
