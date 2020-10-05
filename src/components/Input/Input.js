import React from 'react'
import styled from '@emotion/styled'

const StyledInput = styled.input({
    width: "100%",
    fontFamily: "inherit",
    fontSize: "1.5rem",
    color: "inherit",
    padding: "1.5rem 2rem",
    borderRadius: "2px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    border: "none",
    borderBottom: "3px solid transparent",
    display: "block",
    transition: "all 0.3s",
    ':focus': {
        outline: "none",
        boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.1)",
        borderBottom: "3px solid #213e3b",
    },
    ':focus:invalid': {
        borderBottom: "3px solid #ed5151",
    },
    '::placeholder': {
        color: "#213e3b",
    }
});

const Input = ({ changed, value, ...otherProps }) => {
    return (
        <StyledInput onChange={changed} value={value} {...otherProps} />
    )
}

export default Input;
