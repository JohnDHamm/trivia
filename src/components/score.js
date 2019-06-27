import React from 'react'
import styled from 'styled-components'
import sharedStyles from '../styles/shared_styles'

const StyledScore = styled.div`
    font-size: 3rem;
    font-weight: 900;
    color: #FFF;
    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL}) {
        font-size: 2.5rem;
    }
`

export default function Score({score, roundTotalQuestions}) {
    return (
        <StyledScore>
            SCORE: {score} / {roundTotalQuestions}
        </StyledScore>
    )
}
