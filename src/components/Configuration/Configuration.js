import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import axios from '../../axios-minesweeper';
import { useUser } from '../../hooks/useUser';

const Configuration = (props) => {
    const history = useHistory();
    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');
    const [mines, setMines] = useState('');
    const [user] = useUser();

    const startGame = async () => {
        const gameConfiguration = {
            rows,
            columns,
            mines,
            player: user,
        }
        try {
            const response = await axios.post(`start-game`, gameConfiguration);
            if (response) {
                history.push(`/game/${response.data._id}`);
            } else {
                throw new Error('No response');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const rowsChangedHandler = (event) => {
        setRows(event.target.value);
    }

    const columnsChangedHandler = (event) => {
        setColumns(event.target.value);
    }

    const minesChangedHandler = (event) => {
        setMines(event.target.value);
    }

    return (
        <div>
            <label>Rows</label><input onChange={rowsChangedHandler} value={rows} />
            <label>Columns</label><input onChange={columnsChangedHandler} value={columns} />
            <label>Mines</label><input onChange={minesChangedHandler} value={mines} />
            <button onClick={startGame}>START</button>
        </div>
    )
}

export default Configuration;