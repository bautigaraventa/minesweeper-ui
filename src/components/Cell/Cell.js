import styled from '@emotion/styled';
import React from 'react';

const CellDiv = styled.div(({isRevealed, value}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    border: "1px solid #213e3b",
    width: "4rem",
    height: "4rem",
    fontSize: "1.5rem",
    backgroundColor: isRevealed ? value === -1 ? "#ed5151" : "#41aea9" : "#e8ffff",
    boxShadow: "0 1rem 4rem rgba(0, 0, 0, 0.3)",
    color: "white",
    fontWeight: "500",
}))

const Cell = (props) => {
    let cellToShow = <p></p>;
    if (props.isRevealed) {
        if (props.value === -1) {
            cellToShow = <p>💣</p>;
        } else if (props.value > 0) {
            cellToShow = <p>{props.value}</p>;
        }
    } else if (props.isFlagged) {
        cellToShow = <p>🚩</p>;
    } else if (props.isQuestioned) {
        cellToShow = <p>❓</p>;
    }

    return (
        <CellDiv onClick={props.clicked} onContextMenu={props.contextMenu} isRevealed={props.isRevealed} value={props.value} >
            {cellToShow}
        </CellDiv >
    )
};

export default Cell;