import styled from '@emotion/styled';
import React from 'react';

import Cell from '../Cell';

const BoardDiv = styled.div({
    display: "flex",
})

const Board = (props) => {
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

    const boardContent = rows.map((r, i) => {
        return (
            <div key={i} style={{ display: 'inline-block' }}>
                {r.map(cell => cell)}
            </div>
        )
    })

    return (
        <BoardDiv>
            {boardContent}
        </BoardDiv>
    )
};

export default Board;