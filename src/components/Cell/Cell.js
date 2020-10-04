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

    const cellBombStyle = {
        backgroundColor: 'red',
    }

    const divStyle = props.isRevealed ? props.value === -1 ? { ...style, ...cellBombStyle } : { ...style, ...cellRevealedStyle } : { ...style }

    const cellToShow = props.isRevealed ? props.value === -1 ? <p style={cellStyle}>💣</p> : <p style={cellStyle}>{props.value}</p> : <p style={cellStyle}></p>;

    return (
        <div onClick={props.clicked} style={divStyle} >
            {cellToShow}
        </div >
    )
};

export default cell;