import React, { Component } from 'react'
import Score from '../components/score'
import Question from '../components/question'
import TempApiResult from '../components/temp_api_result'

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            gameReady: false,
            gameOver: false,
            currentQuestion: {},
            score: 0,
            roundTotalQuestions: 0,
            questionCounter: 1
        }
    }

    componentDidMount() {
        this.setState({
            currentQuestion: TempApiResult[0],
            roundTotalQuestions: TempApiResult.length
        }, () => this.setState({gameReady: true}))
    }

    handleResult(result) {
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
            <div style={{border: '1px solid red', background: 'gray'}}>
                Trivia Time!
                <Score
                    score={this.state.score}
                    roundTotalQuestions={this.state.roundTotalQuestions}
                />
                {this.state.gameReady &&
                    <Question
                        questionCounter={this.state.questionCounter}
                        currentQuestion={this.state.currentQuestion}
                        submitResult={(result) => this.handleResult(result)}
                    />
                }
                {this.state.gameOver &&
                    <div>GAME OVER!!!</div>
                }
            </div>
        )
    }
}
