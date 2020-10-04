import React from 'react';

const cell = (props) => {
    const style = {
        border: '1px solid black',
        width: '40px',
        height: '40px',
        padding: '10px'
    }

    const cellStyle = {
        position: 'absolute',
        paddingLeft: '15px'
    }

    const cellRevealedStyle = {
        backgroundColor: '#ccc'
    }

    const cellMineStyle = {
        backgroundColor: 'red',
    }

    const divStyle = props.isRevealed ? props.value === -1 ? { ...style, ...cellMineStyle } : { ...style, ...cellRevealedStyle } : { ...style }
    
    let cellToShow = <p style={cellStyle}></p>;
    if (props.isRevealed) {
        if (props.value === -1) {
            cellToShow = <p style={cellStyle}>💣</p>;
        } else if (props.value > 0) {
            cellToShow = <p style={cellStyle}>{props.value}</p>;
        }
    } else if (props.isFlagged) {
        cellToShow = <p style={cellStyle}>🚩</p>;
    } else if (props.isQuestioned) {
        cellToShow = <p style={cellStyle}>❓</p>;
    }

    return (
        <div onClick={props.clicked} onContextMenu={props.contextMenu} style={divStyle} >
            {cellToShow}
        </div >
    )
};

export default cell;