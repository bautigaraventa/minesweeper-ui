import React, { useState } from 'react'
import styled from '@emotion/styled'

import { useUser } from '../../hooks/useUser';
import Input from '../Input';
import Button from '../Button';

const ActionsContainer = styled.div({
    marginTop: "4rem",
    display: "flex",
    justifyContent: "center",
});

const ButtonMargin = styled(Button)(() => ({
    marginRight: "3rem",
}))

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
        <div>
            <Input changed={handleChange} value={newUser} placeholder="Player" type="text" />
            <ActionsContainer>
                <ButtonMargin withRouter to="/configuration" clicked={handleClick}>
                    New Game
                </ButtonMargin>
                <Button withRouter to={`/games/${newUser}`} clicked={handleClick}>
                    Resume Game
                </Button>
            </ActionsContainer>
        </div>
    )
}

export default Home;
