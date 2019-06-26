import React, { Component } from 'react'
import AnswerButton from './answer_button'
import styled from 'styled-components'
import sharedStyles from '../styles/shared_styles'

const Container = styled.div`
    background: #DDD;
    min-height: 100vh;
    padding-top: 2rem;
`
const QuestionContainer = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    color: ${sharedStyles.COLOR.GREEN};
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL}) {
        font-size: 1.5rem;
    }
`
const NumberCircle = styled.div`
    display: inline-block;
    height: 60px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    border: 4px solid ${sharedStyles.COLOR.GREEN};
    border-radius: 34px;
    background: #222;
    color: #DDD;
    font-size: 2rem;
    margin-right: 1.5rem;
    
    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL}) {
        height: 40px;
        width: 40px;
        line-height: 40px;
        font-size: 1.5rem;
        margin-right: 1rem;
    }
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
                <QuestionContainer>
                    <NumberCircle>{this.props.questionCounter}</NumberCircle>
                    {this.props.currentQuestion.question}
                </QuestionContainer>
                <AnswersContainer>
                    {this.renderAnswers()}
                </AnswersContainer>
            </Container>
        )
    }
}
