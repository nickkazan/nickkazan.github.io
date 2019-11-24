import React from 'react';
import styled from 'styled-components';
import Icons from '../Icons';

class Contact extends React.Component {
  render() {
    return (
      <StyledContact id="contact" className="dark-header centered">
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
  padding: calc(20px + 1vw) calc(20px + 2vw) 0 calc(20px + 2vw);
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  height: 100%;

  .caption {
    text-align: center;
    width: fit-content;
    padding: 40px 0 40px 0;
    text-decoration: none;
  }

`

export default Contact;