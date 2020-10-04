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
        ],
    }

    cellClickedHandler = (x, y) => {
        const boardCloned = [...this.state.board];

        if (boardCloned[x][y].value === -1) {
            return this.lostGame(boardCloned);
        }

        boardCloned[x][y].isRevealed = true;

        this.setState({
            board: boardCloned
        })
    }

    lostGame = (board) => {
        board.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell.value === -1) {
                    board[i][j].isRevealed = true;
                };
            })
        });

        this.setState({
            board: board,
        });
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