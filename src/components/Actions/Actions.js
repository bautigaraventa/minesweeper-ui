import React from 'react';

const actions = (props) => (
    <div>
        <button onClick={props.exitClicked}>EXIT</button>
        <button disabled={props.won || props.lost} onClick={props.saveExitClicked}>SAVE AND EXIT</button>
    </div>
);

export default actions;