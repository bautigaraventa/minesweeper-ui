import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser';

const style = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: '16px'
};

const Home = () => {
    const [user, setUser] = useUser();

    const [newUser, setNewUser] = useState(user);

    const handleChange = (event) => {
        setNewUser(event.target.value);
    }

    const handleClick = () => {
        setUser(newUser);
    }

    return (
        <div style={style}>
            <input onChange={handleChange} value={newUser} type="text" />
            <Link to="/configuration" onClick={handleClick}>
                New Game
            </Link>
            <Link to={`/games/${newUser}`} onClick={handleClick}>
                Resume Game
            </Link>
        </div>
    )
}

export default Home;
