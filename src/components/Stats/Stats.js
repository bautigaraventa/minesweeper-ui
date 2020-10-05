import React from 'react';

const stats = (props) => {

    let gameEnded = null;
    if (props.won) {
        gameEnded = <p>CONGRATULATIONS, YOU WON!</p>
    } else if (props.lost) {
        gameEnded = <p>YOU LOST, MAYBE NEXT TIME...!</p>
    }

    return (
        <div>
            <p>{gameEnded}</p>
            <p>{props.timer}</p>
        </div>
    )
};

export default stats;