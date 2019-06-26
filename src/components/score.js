import React from 'react'
import styled from 'styled-components'

const StyledScore = styled.div`
    font-size: 3rem;
    font-weight: 900;
    color: #FFF;
`

export default function Score({score, roundTotalQuestions}) {
    return (
        <StyledScore>
            SCORE: {score} / {roundTotalQuestions}
        </StyledScore>
    )
}
