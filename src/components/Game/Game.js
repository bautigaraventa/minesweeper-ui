import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from '@emotion/styled'

import Board from '../Board';
import Stats from '../Stats';
import Actions from '../Actions';
import axios from '../../axios-minesweeper';

const GameDiv = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
});

const Game = ({ match: { params: { id } } }) => {
    const history = useHistory();

    const [board, setBoard] = useState([]);
    const [mines, setMines] = useState(0);
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);
    const [player, setPlayer] = useState('');
    const [timer, setTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);

    useEffect(() => {
        axios.get(`resume-game/${id}`)
            .then(response => {
                setBoard(response.data.board);
                setMines(response.data.mines);
                setWon(response.data.won);
                setLost(response.data.lost);
                setPlayer(response.data.player);
                setTimer(response.data.timer);
                setTimerInterval(setInterval(() => {
                    setTimer((prev) => prev + 1);
                }, 1000));
            })
            .catch(error => console.log(error));
            
        return clearInterval(timerInterval); 
    }, [id]);

    const cellClickedHandler = async (x, y) => {
        if (won || lost) {
            return;
        }

        const boardCloned = [...board];
        let updatedBoard;

        if (boardCloned[x][y].isFlagged || boardCloned[x][y].isQuestioned) {
            return;
        }

        if (boardCloned[x][y].value === -1) {
            return lostGame(boardCloned);
        } else if (boardCloned[x][y].value !== 0) {
            boardCloned[x][y].isRevealed = true;
            updatedBoard = [...boardCloned];
        } else {
            updatedBoard = revealRecursively(boardCloned, [[x, y]]);
        }

        const wonGame = hasWon(updatedBoard);

        setBoard(updatedBoard);
        setWon(wonGame);
        if (wonGame) {
            try {
                const gameToEnd = {
                    board,
                    won: wonGame,
                    lost,
                    timer,
                }
                await axios.put(`end-game/${id}`, gameToEnd);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const hasWon = (board) => {
        const cellsLeft = board.map(b => {
            return b.filter(c => !c.isRevealed);
        });
        const flattenedCellsLeft = cellsLeft.flat();

        return flattenedCellsLeft.length === mines;
    }

    const lostGame = async (board) => {
        board.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell.value === -1) {
                    board[i][j].isRevealed = true;
                };
            })
        });
        setBoard(board);
        setLost(true);

        try {
            const lostGame = {
                board,
                won,
                lost: true,
                timer,
            }
            await axios.put(`end-game/${id}`, lostGame);
        } catch (error) {
            console.log(error);
        }
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
        if (won || lost) {
            return;
        }

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

    const exitGameHandler = async () => {
        try {
            const lostGame = {
                board,
                won,
                lost: !won && !lost ? true : lost,
                timer,
            }
            await axios.put(`end-game/${id}`, lostGame);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const saveExitGameHandler = async () => {
        try {
            const pausedGame = {
                board,
                timer,
            }
            await axios.put(`pause-game/${id}`, pausedGame);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GameDiv>
            <Stats
                player={player}
                won={won}
                lost={lost}
                timer={timer} />
            <Board
                board={board}
                cellClicked={cellClickedHandler}
                cellRightClicked={cellRightClickedHandler} />
            <Actions
                exitClicked={exitGameHandler}
                saveExitClicked={saveExitGameHandler}
                won={won}
                lost={lost} />
        </GameDiv>
    )
}

export default Game;