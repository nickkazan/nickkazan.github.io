import React from 'react';
import styled from 'styled-components';
import amazonLogo from "../../assets/white-amazon-logo.png";

class ExperienceSection extends React.Component {
    render() {
        return (
          <StyledExperienceSection>
              <div className="title text">
                {this.props.title}
              </div>
              <div className="job">
                <img src={amazonLogo} className="logo" alt="Amazon_logo"/>
                <div className="desc text">
                  <div>
                    SDE Intern
                    <div className="date text">
                      May 2019 - August 2019
                    </div>
                  </div>
                  <div className="bullet text">
                    Built, tested, and deployed a self-service portal for clients to manage users.
                  </div>
                </div>
              </div>
          </StyledExperienceSection>
        );
    }
}

const StyledExperienceSection = styled.section `
  padding: 50px 0 0 0;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;

  .date {
    float: right;
    font-size: 18px;
  }

  .bullet {
    font-size: 18px;
  }

  .job {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }

  .desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 18px;
  }

  .title {
    font-size: 36px;
    width: fit-content;
    margin: 0 auto;
    align-items: center;
    padding: 0px 0 25px 0;
    font-smooth: auto;
  }

  .logo {
    display: block;
    width: 192px;
    height: 66px;
    padding-right: 50px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
    width: 100%;
    box-sizing: border-box;
  }
`

export default ExperienceSection;