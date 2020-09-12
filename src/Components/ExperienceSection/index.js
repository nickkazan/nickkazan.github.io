import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import amazonLogo from "../../assets/black-amazon-logo.png";
import govLogo from "../../assets/black_gov_of_canada.png";
import Fade from 'react-reveal/Fade'; 

class ExperienceSection extends React.Component {
    render() {
        return (
          <StyledExperienceSection id="experience" className="dark-header">
              <div className="title text">
                {this.props.title}
              </div>

              <Fade duration={1000} left>
                <MediaQuery maxWidth={600}>
                  <Fade duration={1000} left>
                    <img src={amazonLogo} className="logo" alt="Amazon_logo"/>
                  </Fade>
                </MediaQuery>
                <div className="job">
                  <MediaQuery minWidth={600}>
                    <Fade duration={1000} left>              
                      <img src={amazonLogo} className="logo" alt="Amazon_logo"/>
                    </Fade>
                  </MediaQuery>
                  <div className="desc text">
                    <div className="position text">
                      Return SDE Intern
                      <div className="date text">
                        May 2020 - August 2020
                      </div>
                    </div>
                    <div className="bullet text">
                      Redesigned the team’s architecture to <strong>alleviate service dependencies</strong>, which minimized downtime, using mainly <strong>Java, Python, TypeScript, and SQL</strong>.
                    </div>
                    <div className="bullet text">
                      Implemented an entire flow using modern services including <strong>Cloud Development Kit, Elastic Compute Cloud, Relational Database Service,
                      Key Management Service, Secrets Manager, Lambdas, and Virtual Private Cloud</strong>.
                    </div>
                    <div className="bullet text">
                      Guaranteed code quality using modern <strong>testing methodologies including unit and integration</strong>.
                    </div>
                    <div className="bullet text">
                      Created a pipeline that automatically pulled code from various dependencies and tested each stage (test, prod, and sandbox). I was able
                      to see my code in production that impacted <strong>millions of requests daily</strong>.
                    </div>
                  </div>
                </div>
              </Fade>


              <Fade duration={1000} left>
                <MediaQuery maxWidth={600}>
                  <Fade duration={1000} left>
                    <img src={amazonLogo} className="logo" alt="Amazon_logo"/>
                  </Fade>
                </MediaQuery>
                <div className="job">
                  <MediaQuery minWidth={600}>
                    <Fade duration={1000} left>              
                      <img src={amazonLogo} className="logo" alt="Amazon_logo"/>
                    </Fade>
                  </MediaQuery>
                  <div className="desc text">
                    <div className="position text">
                      SDE Intern
                      <div className="date text">
                        May 2019 - August 2019
                      </div>
                    </div>
                    <div className="bullet text">
                    <strong>Built, tested, and deployed</strong> a self-service portal for clients to manage users.
                    </div>
                    <div className="bullet text">
                      Improved the speed of on-boarding corporate clients by <strong>22%</strong>, while also reducing user management support contacts by <strong>47%</strong>.
                    </div>
                    <div className="bullet text">
                      Designed a <strong>long-term, scalable architecture</strong> using many modern services.                  
                    </div>
                    <div className="bullet text">
                      Some of the services used include: <strong>Key Management Service, DynamoDB, Simple Queue Service, and Simple Notification Service.</strong>
                    </div>
                  </div>
                </div>
              </Fade>

              <Fade duration={1000} left>
                <MediaQuery maxWidth={600}>
                  <Fade duration={1000} left>
                    <img src={govLogo} className="logo" alt="Government_of_Canada"/>
                  </Fade>
                </MediaQuery>
                <div className="job">
                  <MediaQuery minWidth={600}>
                    <Fade duration={1000} left>               
                      <img src={govLogo} className="logo" alt="Government_of_Canada"/>
                    </Fade>
                  </MediaQuery>
                  <div className="desc text">
                    <div className="position text">
                      Programmer Analyst
                      <div className="date text">
                        May 2018 - August 2018
                      </div>
                    </div>
                    <div className="bullet text">
                      Fixed ongoing client issues leading to a <strong>smoother experience</strong> in our Fall Release.
                    </div>
                    <div className="bullet text">
                      Created software to organize all current client requests which improved efficiency by <strong>30%</strong>.
                    </div>
                  </div>
                </div>
              </Fade>
          </StyledExperienceSection>
        );
    }
}

const StyledExperienceSection = styled.section `
  padding: calc(20px + 1vw) calc(20px + 2vw) 0 calc(20px + 2vw);
  width: 100%;
  box-sizing: border-box;
  justify-content: center;

  .date {
    float: right;
    font-size: calc(10px + 1vw);
    margin: 0px 0px 10px 0px;
    color: #119DA4
  }

  .position {
    color: #119DA4;
    font-size: calc(10px + 1vw);
    margin: 0px 0px 10px 0px;
  }

  .bullet {
    font-size: calc(8px + 1vw);
    margin: 0px 0px 10px 0px;
    width: 100%;
  }

  .job {
    display: flex;
    flex-direction: row;
    margin: 0 0 50px 0;
    width: 100%;
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
    height: 100%;
    padding: 0 calc(12px + 2vw) 0 0;
    align-items: center;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    .logo {
      display: block;
      width: calc(60px + 9vw);
      height: 100%;
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