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
    font-size: 24px;
    font-family: 'Merriweather Sans';
    border: 1px solid white;
    padding:0.35em 1.2em;
    transition: all .3s;
    border-radius: 4px;

    :hover {
      color: white;
      background-color:#119DA4;    
    }  
`

export default Button;