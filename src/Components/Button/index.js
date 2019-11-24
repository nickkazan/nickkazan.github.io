import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
    render() {
        return (
          <StyledButton>
            {this.props.text}
          </StyledButton>
        );
    }
}

const StyledButton = styled.div `
    font-size: calc(10px + 1vw);
    font-family: 'Merriweather Sans';
    border: 1px solid black;
    padding: 0.35em 1.2em;
    margin-top: 25px;
    transition: all .3s;
    border-radius: 4px;
    width: fit-content;
    color: black

    :hover {
      color: black;
      background-color: #119DA4;
      cursor: pointer;   
    }  
`

export default Button;