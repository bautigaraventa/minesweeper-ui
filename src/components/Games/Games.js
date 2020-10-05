import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../axios-minesweeper';

const Games = ({ match: { params: { player } } }) => {
    const [oldGames, setOldGames] = useState([]);

    useEffect(() => {
        axios.get(`games/${player}`)
            .then(response => {
                setOldGames(response.data);
            })
            .catch(error => console.log(error));
    }, [player]);

    let oldGamesList = (
        <div>
            <p>You don't have any game to resume</p>
            <Link to="/">GO BACK</Link>
        </div>
    );
    if (oldGames.length) {
        oldGamesList = oldGames.map(g => {
            return (
                <Link key={g._id} to={`/game/${g._id}`}>
                    <li>{g.player} - rows: {g.board.length} - columns: {g.board[0].length} - mines: {g.mines} - timer: {g.timer}</li>
                </Link>
            );
        })
    }

    return (
        <div>
            <ul>
                {oldGamesList}
            </ul>
        </div>
    )
}

export default Games;