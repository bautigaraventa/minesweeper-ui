import React, { useState, useEffect } from 'react';

import Board from '../Board';
import Stats from '../Stats';
import Actions from '../Actions';
import axios from '../../axios-minesweeper';

const Game = ({ match: { params: { id } } }) => {
    const [board, setBoard] = useState([]);
    const [mines, setMines] = useState(0);
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);

    useEffect(() => {
        axios.get(`resume-game/${id}`)
            .then(response => {
                setBoard(response.data.board);
                setMines(response.data.mines);
                setWon(response.data.won);
                setLost(response.data.lost);
            })
            .catch(error => console.log(error));
    }, [id]);

    const cellClickedHandler = (x, y) => {
        const boardCloned = [...board];

        if (boardCloned[x][y].isFlagged || boardCloned[x][y].isQuestioned) {
            return;
        }

        if (boardCloned[x][y].value === -1) {
            return lostGame(boardCloned);
        } else if (boardCloned[x][y].value !== 0) {
            boardCloned[x][y].isRevealed = true;

            const won = hasWon(boardCloned);

            setBoard(boardCloned);
            setWon(won);
        } else {
            const updatedBoard = revealRecursively(boardCloned, [[x, y]]);

            const won = hasWon(updatedBoard);

            setBoard(updatedBoard);
            setWon(won);
        }
    }

    const hasWon = (board) => {
        const cellsLeft = board.map(b => {
            return b.filter(c => !c.isRevealed);
        });
        const flattenedCellsLeft = cellsLeft.flat();

        return flattenedCellsLeft.length === mines;
    }

    const lostGame = (board) => {
        board.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell.value === -1) {
                    board[i][j].isRevealed = true;
                };
            })
        });

        setBoard(board);
        setLost(true);
    }

    const revealRecursively = (board, positionsToReveal) => {
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
                return null;
            }
        })
            .flat()
            .filter(elem => elem != null);

        const newPositionsToReveal = possiblePositionsToReveal.filter(p => {
            return !clonedBoard[p[0]]?.[p[1]]?.isRevealed;
        });

        return revealRecursively(clonedBoard, newPositionsToReveal);
    }

    const cellRightClickedHandler = (event, x, y) => {
        event.preventDefault();

        const boardCloned = [...board];

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

        setBoard(boardCloned);
    }


    return (
        <div>
            <Stats />
            <Board
                board={board}
                won={won}
                lost={lost}
                cellClicked={cellClickedHandler}
                cellRightClicked={cellRightClickedHandler} />
            <Actions />
        </div>
    )
}

export default Game;