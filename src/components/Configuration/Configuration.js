import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import axios from '../../axios-minesweeper';
import { useUser } from '../../hooks/useUser';
import Button from '../Button/Button';
import Input from '../Input';

const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "20vw",
    width: "50%",
    margin: "0 auto",
}

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
        <div style={divStyle}>
            <Input changed={rowsChangedHandler} value={rows} placeholder="Rows" type="number" min={5} />
            <Input changed={columnsChangedHandler} value={columns} placeholder="Columns" type="number" min={5} />
            <Input changed={minesChangedHandler} value={mines} placeholder="Mines" type="number" min={1} />
            <Button clicked={startGame}>START</Button>
        </div>
    )
}

export default Configuration;