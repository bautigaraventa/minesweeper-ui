import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../axios-minesweeper';
import Button from '../Button';

const UlContainer = styled.ul({
    listStyle: "none",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden",
})

const StyledLink = styled(Link)(() => ({
    fontSize: "1.5rem",
    padding: "1.5rem 2rem",
    borderRadius: "2px",
    textDecoration: "none",
    display: "block",
    transition: "all 0.2s",
    ':hover': {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        transform: "translateY(-2px) scale(1.01)",
    },
    ':visited': {
        color: "#213e3b",
    },
}));

const NoGamesDiv = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10rem",
});

const TextNoGame = styled.p({
    fontSize: "2rem",
    marginBottom: "2rem",
})

const Games = ({ match: { params: { player } } }) => {
    const [oldGames, setOldGames] = useState([]);

    useEffect(() => {
        axios.get(`games/${player}`)
            .then(response => {
                setOldGames(response.data);
            })
            .catch(error => console.log(error));
    }, [player]);

    let noGames = (
        <NoGamesDiv>
            <TextNoGame>You don't have any game to resume</TextNoGame>
            <Button withRouter to="/">GO BACK</Button>
        </NoGamesDiv>
    );

    const oldGamesList = oldGames.map(g => {
        return (
            <li key={g._id}>
                <StyledLink to={`/game/${g._id}`}>
                    {g.player} - Rows: {g.board.length} - Columns: {g.board[0].length} - Mines: {g.mines} - Timer: {g.timer}
                </StyledLink>
            </li>
        );
    })

    return (
        <div>
            {oldGames.length ? <UlContainer className="games-list">
                {oldGamesList}
            </UlContainer> : noGames}
        </div>
    )
}

export default Games;