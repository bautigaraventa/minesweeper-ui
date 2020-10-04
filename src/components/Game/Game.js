import React, { Component } from 'react';

import Board from '../Board/Board';
import Stats from '../Stats/Stats';
import Actions from '../Actions/Actions';

class Game extends Component {
    state = {
        board: [
            [{ value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 2, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 2, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 2, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 3, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 3, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 2, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 2, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 2, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 2, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 2, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }],
            [{ value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: -1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 1, isQuestioned: false, isFlagged: false, isRevealed: false }, { value: 0, isQuestioned: false, isFlagged: false, isRevealed: false }]
        ],
    }

    cellClickedHandler = (x, y) => {
        const boardCloned = [...this.state.board];
        
        if (boardCloned[x][y].isFlagged || boardCloned[x][y].isQuestioned) {
            return;
        }

        if (boardCloned[x][y].value === -1) {
            return this.lostGame(boardCloned);
        } else if (boardCloned[x][y].value !== 0) {
            boardCloned[x][y].isRevealed = true;

            this.setState({
                board: boardCloned
            });
        } else {
            const updatedBoard = this.revealRecursively(boardCloned, [[x, y]]);

            this.setState({
                board: updatedBoard,
            });
        }
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

    revealRecursively = (board, positionsToReveal) => {
        const clonedBoard = [...board];

        if (!positionsToReveal.length) {
            return clonedBoard;
        }

        positionsToReveal.forEach(position => {
            if (clonedBoard[position[0]]?.[position[1]]) {
                clonedBoard[position[0]][position[1]].isRevealed = true;
            };
        });

        const possiblePositionsToReveal = positionsToReveal.map(position => {
            if (clonedBoard[position[0]]?.[position[1]]?.value === 0) {
                return [
                    [position[0] - 1, position[1] - 1],
                    [position[0] - 1, position[1]],
                    [position[0] - 1, position[1] + 1],
                    [position[0], position[1] - 1],
                    [position[0], position[1] + 1],
                    [position[0] + 1, position[1] - 1],
                    [position[0] + 1, position[1]],
                    [position[0] + 1, position[1] + 1],
                ]
            } else {
                return null
            }
        })
            .flat()
            .filter(elem => elem != null);

        const newPositionsToReveal = possiblePositionsToReveal.filter(p => {
            return !clonedBoard[p[0]]?.[p[1]]?.isRevealed;
        });

        return this.revealRecursively(clonedBoard, newPositionsToReveal);
    }

    cellRightClickedHandler = (event, x, y) => {
        event.preventDefault();

        const boardCloned = [...this.state.board];

        if (boardCloned[x][y].isRevealed) {
            return;
        } else if (boardCloned[x][y].isFlagged) {
            boardCloned[x][y].isFlagged = false;
            boardCloned[x][y].isQuestioned = true;
        } else if (boardCloned[x][y].isQuestioned) {
            boardCloned[x][y].isQuestioned = false;
        } else {
            boardCloned[x][y].isFlagged = true;
        }

        this.setState({
            board: boardCloned
        });
    }

    render() {
        return (
            <div>
                <Stats />
                <Board
                    board={this.state.board}
                    cellClicked={this.cellClickedHandler}
                    cellRightClicked={this.cellRightClickedHandler} />
                <Actions />
            </div>
        )
    }
}

export default Game;