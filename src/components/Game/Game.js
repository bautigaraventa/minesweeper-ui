import React, { Component } from 'react';

import Board from '../Board/Board';
import Stats from '../Stats/Stats';
import Actions from '../Actions/Actions';

class Game extends Component {
    state = {
        board: [
            [{ value: 1, isRevealed: false }, { value: -1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }],
            [{ value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 2, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }],
            [{ value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: 2, isRevealed: false }, { value: -1, isRevealed: false }, { value: 2, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }],
            [{ value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: -1, isRevealed: false }, { value: 3, isRevealed: false }, { value: 3, isRevealed: false }, { value: -1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }],
            [{ value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 2, isRevealed: false }, { value: -1, isRevealed: false }, { value: 2, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: -1, isRevealed: false }, { value: 1, isRevealed: false }],
            [{ value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }],
            [{ value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }],
            [{ value: -1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: -1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }],
            [{ value: 1, isRevealed: false }, { value: 2, isRevealed: false }, { value: 1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: 2, isRevealed: false }, { value: 2, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }],
            [{ value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: -1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }, { value: 0, isRevealed: false }, { value: 1, isRevealed: false }, { value: -1, isRevealed: false }, { value: 1, isRevealed: false }, { value: 0, isRevealed: false }]
        ]
    }

    cellClickedHandler = (x, y) => {
        const boardCloned = [...this.state.board];

        boardCloned[x][y].isRevealed = true;

        this.setState({
            board: boardCloned
        })
    }

    render() {
        return (
            <div>
                <Stats />
                <Board
                    board={this.state.board}
                    cellClicked={this.cellClickedHandler} />
                <Actions />
            </div>
        )
    }
}

export default Game;