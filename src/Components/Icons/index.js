import React from 'react';
import styled from 'styled-components';
import InstaLogo from '../../Icons/InstaLogo';
import FacebookLogo from '../../Icons/FacebookLogo';
import LinkedInLogo from '../../Icons/LinkedinLogo';
import GithubLogo from '../../Icons/GithubLogo';

class Icons extends React.Component {
  render() {
    return (
      <StyledIcons>
        <div className="icon-cluster">
          <a href="https://www.instagram.com/nickkazan" className="image-link" target="_blank" rel="noopener noreferrer">
            <InstaLogo className="icon" alt="insta_logo"/>
          </a>
          <a href="https://www.facebook.com/nickkazan123" className="image-link" target="_blank" rel="noopener noreferrer">
            <FacebookLogo className="icon" alt="facebook_logo"/>
          </a>
        </div>
        <div className="icon-cluster">
          <a href="https://www.linkedin.com/in/nickkazan/" className="image-link" target="_blank" rel="noopener noreferrer">
            <LinkedInLogo className="icon" alt="linkedin_logo"/>
          </a>
          <a href="https://github.com/nickkazan" className="image-link" target="_blank" rel="noopener noreferrer">
            <GithubLogo className="icon" alt="github_logo"/>
          </a>
        </div>
      </StyledIcons>
    )
  }
}

const StyledIcons = styled.div `

  .image-link {
    margin: 25px;
  }

  .icon-cluster {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .icon {
    stroke: #fff;
    fill: none;
    viewBox: 0 0 10 10;
  }

  .icon:hover {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    fill: #119DA4;
    stroke: #119DA4;
  }  
`

export default Icons;