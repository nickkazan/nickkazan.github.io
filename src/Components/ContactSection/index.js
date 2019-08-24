import React from 'react';
import styled from 'styled-components';
import Icons from '../Icons';

class Contact extends React.Component {
  render() {
    return (
      <StyledContact>
        <div className="title text">
          {this.props.title}
        </div>
        <div className="text caption">
          Feel free to reach out to me at: <a href="mailto:nicholas.kazan1@gmail.com" className="highlighted-text linked"> nicholas.kazan1@gmail.com </a>
        </div>
        <Icons/>
      </StyledContact>
    );
  }
}

const StyledContact = styled.section `
  padding: 50px 50px 0 50px;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;

  .caption {
    align-items: center;
    width: fit-content;
    padding: 40px;
    text-decoration: none;
  }

`

export default Contact;