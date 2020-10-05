import React from 'react';
import styled from '@emotion/styled'

const baseStyles = {
    color: 'white',
    textAlign: 'center',
}

const GameEnd = styled.p({
    fontSize: '3rem',
    ...baseStyles,
});

const Timer = styled.p({
    fontSize: '4rem',
    ...baseStyles,
});

const StatsDiv = styled.div({
    marginBottom: '2rem'
})

const stats = (props) => {

    let gameEnded = null;
    if (props.won) {
        gameEnded = <GameEnd>YOU WIN!</GameEnd>
    } else if (props.lost) {
        gameEnded = <GameEnd>YOU LOOSE!</GameEnd>
    } else {
        gameEnded = <GameEnd>{props.player}</GameEnd>
    }

    return (
        <StatsDiv>
            {gameEnded}
            <Timer>{props.timer}</Timer>
        </StatsDiv>
    )
};

export default stats;