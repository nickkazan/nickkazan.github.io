import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

class AboutSection extends React.Component {
  render() {
    return (
      <StyledAboutSection id="about-me" className="light-header">
        <div className="title text">
          {this.props.title}
        </div>
        <Fade duration={1000} cascade top>
          <div className="text skill-block">
            <div className="skill-column left">
              <div>
                <h1>Proficient</h1>
              </div>
              <div>
                <p className="highlighted-text">Languages</p>
                <p>Python, Java, Swift, Javascript</p>
              </div>
              <div>
                <p className="highlighted-text">Technologies</p>
                <p>AWS, Android, iOS, Git, JUnit, React Native</p>
              </div>
            </div>

            <div className="skill-column">
              <div>
                <h1>Familiar</h1>
              </div>
              <div>
                <p className="highlighted-text">Languages</p>
                <p>CSS, HTML5, SQL, C++, C</p>
              </div>
              <div>
                <p className="highlighted-text">Technologies</p>
                <p>Azure, ARKit, Linux, React, Node, Spring, Express, MongoDB</p>
              </div>
            </div>

            <div className="skill-column right">
              <div>
                <h1>Interested</h1>
              </div>
              <div>
                <p className="highlighted-text">Languages</p>
                <p>Go, Ruby, TypeScript, Kotlin</p>
              </div>
              <div>
                <p className="highlighted-text">Technologies</p>
                <p>ARCore, PyTorch, TensorFlow, Django, Angular, Unity</p>
              </div>
            </div>
          </div>
        </Fade>
      </StyledAboutSection>
    )
  }
}

const StyledAboutSection = styled.section `
  padding: calc(20px + 1vw) calc(20px + 2vw) 0 calc(20px + 2vw);
  width: 100%;
  box-sizing: border-box;
  justify-content: center;

  .skill-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    flex: 1;
    min-width: 0;
    padding: 10px;
  }

  .skill-block {
    margin: calc(12px + 1vw);
    align-items: stretch;
    justify-content: space-between;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: fit-content;
    position: relative;
    background-color: #FFFFFF;
  }

  p {
    font-size: calc(4px + 1vw);
    text-align: center;
  }
  
  h1 {
    font-size: calc(10px + 1vw);
  }

  .left {
    border-top-left-radius: 10px;
    border-right: 0px;
    border-bottom-left-radius: 10px;
  }
  .right {
    border-top-right-radius: 10px;
    border-left: 0px;
    border-bottom-right-radius: 10px;
  }
`

export default AboutSection;