import React from 'react';
import styled from '@emotion/styled'

import Button from '../Button';

const ButtonMargin = styled(Button)(() => ({
    marginRight: "3rem",
}));

const StyledDiv = styled.div({
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
})

const actions = (props) => (
    <StyledDiv>
        <ButtonMargin clicked={props.exitClicked}>EXIT</ButtonMargin>
        <Button disabled={props.won || props.lost} clicked={props.saveExitClicked}>SAVE AND EXIT</Button>
    </StyledDiv>
);

export default actions;