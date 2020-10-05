import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

const linkSelectorStyles = {
    padding: "2rem 4rem",
    backgroundColor: "#41aea9",
    borderRadius: "3px",
    color: "white",
    boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
    transition: "all .3s",
}

const hoverStyles = {
    backgroundColor: "#4ed4ce",
    transform: "translateY(-0.3rem)",
}

const activeStyles = {
    outline: "none",
    transform: "translateY(-0.1rem)",
    boxShadow: "0 0.5rem 1rem rgba(0,0,0, 0.2)",
}

const baseStyles = {
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: '500',
    fontSize: "1.6rem",
    cursor: "pointer",
    ...linkSelectorStyles,
    ':link': {
        ...linkSelectorStyles,
    },
    ':visited': {
        ...linkSelectorStyles,
    },
    ':hover': {
        ...hoverStyles,
    },
    ':active': {
        ...activeStyles,
    },
    ':focus': {
        outline: "none",
        transform: "translateY(-0.1rem)",
        boxShadow: "0 0.5rem 1rem rgba(0,0,0, 0.2)",
    },
}

const StyledButtonWithRouter = styled(Link)(() => ({
    ...baseStyles,
}));

const StyledButton = styled.button({
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: '500',
    fontSize: "1.6rem",
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
    ...linkSelectorStyles,
    ':hover': {
        ...hoverStyles,
    },
    ':active': {
        ...activeStyles,
    },
    ':focus': {
        outline: 'none'
    }
});

const Button = ({ clicked, withRouter, ...otherProps }) => {
    if (withRouter) {
        return <StyledButtonWithRouter onClick={clicked} {...otherProps} />;
    } else {
        return <StyledButton onClick={clicked} {...otherProps} />;
    }
}

export default Button;
