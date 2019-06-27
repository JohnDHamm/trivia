import React, { Component } from 'react'
import Score from '../components/score'
import Question from '../components/question'
import TempApiResult from '../components/temp_api_result'
import styled from 'styled-components'
import logo from '../img/trivia-sign.jpg'
import sharedStyles from '../styles/shared_styles'

const Header = styled.div`
    background: #333;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL}) {
        flex-direction: column;
        justify-content: center;
    }
`
const Logo = styled.img`
    width: 200px;
    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL}) {
        width: 100%;
    }
`
const ScoreWrapper = styled.div`
    padding-right: 3rem;
    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL}) {
        padding-right: 0;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
    `
const GameOver = styled.div`
    background: ${sharedStyles.COLOR.GREEN};
    min-height: 100vh;
    color: #FFF;
    font-size: 5rem;
    font-weight: 900;
    text-align: center;
    padding-top: 3rem;
    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL}) {
        font-size: 3rem;
    }
`

export default class Game extends Component {
    state = {
        gameReady: false,
        gameOver: false,
        currentQuestion: {},
        score: 0,
        roundTotalQuestions: 0,
        questionCounter: 1
    }

    componentDidMount() {
        this.setState({
            currentQuestion: TempApiResult[0],
            roundTotalQuestions: TempApiResult.length
        }, () => this.setState({gameReady: true}))
    }

    handleResult = result => {
        if (result) {
            this.setState({score: this.state.score + 1})
        }

        this.setState({questionCounter: this.state.questionCounter + 1},
            () => {
                if (this.state.questionCounter < TempApiResult.length + 1) {
                    this.setState({currentQuestion: TempApiResult[this.state.questionCounter - 1]})
                } else {
                    this.setState({gameReady: false, gameOver: true})
                }               
            }
        )
    }

    render() {
        return (
            <div>
                <Header>
                    <Logo src={logo} alt='logo' />
                    <ScoreWrapper>
                        <Score
                            score={this.state.score}
                            roundTotalQuestions={this.state.roundTotalQuestions}
                            />
                    </ScoreWrapper>
                </Header>
                {this.state.gameReady &&
                    <Question
                        questionCounter={this.state.questionCounter}
                        currentQuestion={this.state.currentQuestion}
                        submitResult={(result) => this.handleResult(result)}
                    />
                }
                {this.state.gameOver &&
                    <GameOver>GAME OVER!!!</GameOver>
                }
            </div>
        )
    }
}
