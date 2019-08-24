import React from 'react';
import styled from 'styled-components';
import amazonLogo from "../../assets/white-amazon-logo.png";
import govLogo from "../../assets/gov_of_canada.png";

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

              <div className="job">
                <img src={govLogo} className="logo" alt="Government_of_Canada"/>
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
    font-size: 20px;
    margin: 0px 0px 10px 0px;
  }

  .position {
    color: #119DA4;
    font-size: 20px;
    margin: 0px 0px 10px 0px;
  }

  .bullet {
    font-size: 18px;
    margin: 0px 0px 10px 0px;
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