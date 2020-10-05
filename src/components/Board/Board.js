import React from 'react';

import Cell from '../Cell';

const Board = (props) => {
    const style = {
        textAlign: 'center',
        height: `${props.board.length * 42}px`,
    }

    let boardContent = <p>CONGRATULATIONS, YOU WON!</p>
    if (props.lost) {
        boardContent = <p>YOU LOST, MAYBE NEXT TIME...!</p>
    } else if (!props.won) {
        const rows = props.board.map((row, i) => {
            return row.map((cell, j) => {
                return (
                    <Cell
                        key={i.toString().concat(j.toString())}
                        value={cell.value}
                        isRevealed={cell.isRevealed}
                        isQuestioned={cell.isQuestioned}
                        isFlagged={cell.isFlagged}
                        clicked={() => props.cellClicked(i, j)}
                        contextMenu={(event) => props.cellRightClicked(event, i, j)} />
                )
            })
        });

        boardContent = rows.map((r, i) => {
            return (
                <div key={i} style={{ display: 'inline-block' }}>
                    {r.map(cell => cell)}
                </div>
            )
        })
    }

    return (
        <div style={style}>
            {boardContent}
        </div>
    )
};

export default Board;