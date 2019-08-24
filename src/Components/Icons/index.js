import React from 'react';
import styled from 'styled-components';
import insta from '../../assets/insta-logo.png';
import fb from '../../assets/fb-logo.png';
import linkedin from '../../assets/linkedin-logo.png';
import github from '../../assets/github-logo.png';

class Icons extends React.Component {
  render() {
    return (
      <StyledIcons>
        <div className="icon-cluster">
          <a href="https://www.instagram.com/nickkazan/" target="_blank" rel="noopener noreferrer">
            <img src={insta} className="icon" alt="insta_logo"/>
          </a>
          <a href="https://www.facebook.com/nickkazan123" target="_blank" rel="noopener noreferrer">
            <img src={fb} className="icon" alt="facebook_logo"/>
          </a>
        </div>
        <div className="icon-cluster">
          <a href="https://www.linkedin.com/in/nickkazan/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} className="icon" alt="linkedin_logo"/>
          </a>
          <a href="https://github.com/nickkazan" target="_blank" rel="noopener noreferrer">
            <img src={github} className="icon" alt="github_logo"/>
          </a>
        </div>

      </StyledIcons>
    )
  }
}

const StyledIcons = styled.div `
  .icon-cluster {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 100px;
    height: 100px;
    margin: 25px;
  }
`

export default Icons;