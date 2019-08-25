import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import amazonLogo from "../../assets/white-amazon-logo.png";
import govLogo from "../../assets/gov_of_canada.png";

class ExperienceSection extends React.Component {
    render() {
        return (
          <StyledExperienceSection>
              <div className="title text">
                {this.props.title}
              </div>
              <MediaQuery maxWidth={600}>
                <img src={amazonLogo} className="logo" alt="Amazon_logo"/>
              </MediaQuery>
              <div className="job">
                <MediaQuery minWidth={600}>                 
                  <img src={amazonLogo} className="logo" alt="Amazon_logo"/>
                </MediaQuery>
                <div className="desc text">
                  <div className="position text">
                    SDE Intern
                    <div className="date text">
                      May 2019 - August 2019
                    </div>
                  </div>
                  <div className="bullet text">
                    Built, tested, and deployed a self-service portal for clients to manage users.
                  </div>
                  <div className="bullet text">
                    Improved the speed of on-boarding corporate clients by 22%, while also reducing user management support contacts by 47%.
                  </div>
                  <div className="bullet text">
                    Designed a long-term, scalable architecture using many modern services.                  
                  </div>
                  <div className="bullet text">
                    Some of the services used include: AWS KMS, DynamoDB, SQS, SNS, etc.
                  </div>
                </div>
              </div>

              <MediaQuery maxWidth={600}>
                <img src={govLogo} className="logo" alt="Government_of_Canada"/>
              </MediaQuery>
              <div className="job">
                <MediaQuery minWidth={600}>                 
                  <img src={govLogo} className="logo" alt="Government_of_Canada"/>
                </MediaQuery>
                <div className="desc text">
                  <div className="position text">
                    Programmer Analyst
                    <div className="date text">
                      May 2018 - August 2018
                    </div>
                  </div>
                  <div className="bullet text">
                    Fixed ongoing client issues leading to a smoother experience in our Fall Release.
                  </div>
                  <div className="bullet text">
                    Created software to organize all current client requests which improved efficiency by 30%.
                  </div>
                  <div className="bullet text">
                    Refactored and redesigned older code.
                  </div>
                </div>
              </div>
          </StyledExperienceSection>
        );
    }
}

const StyledExperienceSection = styled.section `
  padding: 50px 50px 0 50px;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;

  .date {
    float: right;
    font-size: calc(8px + 1vw);
    margin: 0px 0px 10px 0px;
  }

  .position {
    color: #119DA4;
    font-size: calc(8px + 1vw);
    margin: 0px 0px 10px 0px;
  }

  .bullet {
    font-size: calc(6px + 1vw);
    margin: 0px 0px 10px 0px;
    width: 100%;
  }

  .job {
    display: flex;
    flex-direction: row;
    margin: 0 0 50px 0;
  }

  .desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    margin: 0px 0px 10px 0px;
  }

  .logo {
    display: block;
    width: calc(60px + 9vw);
    height: calc(20px + 3vw);
    padding: 0 calc(12px + 2vw) 0 0;
    align-items: center;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    .logo {
      display: block;
      width: calc(60px + 9vw);
      height: calc(20px + 3vw);
      padding: 0 0 calc(12px + 1vw) 0;
      align-items: center;
      margin: 0 auto;
    }

    .job {
      margin: 0 0 25px 0;
    }
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