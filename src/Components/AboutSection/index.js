import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import MediaQuery from 'react-responsive'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.JPG'
import pic3 from '../../assets/pic3.JPG'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'
import pic7 from '../../assets/pic7.jpg'
import pic8 from '../../assets/pic8.JPG'

class AboutSection extends React.Component {
  render() {
    return (
      <StyledAboutSection id="about-me" className="light-header">
        <div className="title text">
          {this.props.title}
        </div>

        <div className="text desc">
          <MediaQuery maxWidth={1000}>
            <div className="life-images">
              <img src={pic1} className="image" alt="nick kazan life pics"/>
              <img src={pic2} className="image" alt="nick kazan life pics"/>
            </div>
            <div className="life-images">
              <img src={pic3} className="image" alt="nick kazan life pics"/>
              <img src={pic4} className="image" alt="nick kazan life pics"/>
            </div>
            <div className="life-images">
              <img src={pic5} className="image" alt="nick kazan life pics"/>
              <img src={pic6} className="image" alt="nick kazan life pics"/>
            </div>
            <div className="life-images">
              <img src={pic7} className="image" alt="nick kazan life pics"/>
              <img src={pic8} className="image" alt="nick kazan life pics"/>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={1000}>
            <div className="life-images">
              <img src={pic1} className="image" alt="nick kazan life pics"/>
              <img src={pic2} className="image" alt="nick kazan life pics"/>
              <img src={pic3} className="image" alt="nick kazan life pics"/>
              <img src={pic4} className="image" alt="nick kazan life pics"/>
            </div>
            <div className="life-images">
              <img src={pic5} className="image" alt="nick kazan life pics"/>
              <img src={pic6} className="image" alt="nick kazan life pics"/>
              <img src={pic7} className="image" alt="nick kazan life pics"/>
              <img src={pic8} className="image" alt="nick kazan life pics"/>
            </div>
          </MediaQuery>
          <p>I'm a fourth year computer science student, with a minor in entrepreneurship, studying at Carleton University! When I'm not programming,
            you can catch me hiking, strumming my guitar, and going on adventures with friends. One of my favourite things to do is explore new areas, so in 2018
            I went across Canada by train to learn about the cities we have to offer. I fell in love with Vancouver and spent a summer working there afterwards.
            Since my summer 2020 internship was remote, I went to re-visit Vancouver in August. After the pandemic, I have plans to backpack across Europe and visit
            Japan and Korea as well!
          </p>
        </div>

        <Fade duration={1000} cascade left>
          <div className="text skill-block">
            <div className="skill-column">
              <div>
                <h1>Proficient</h1>
              </div>
              <div>
                <p className="highlighted-text">Languages</p>
                <p>Python, Java, Javascript, TypeScript, SQL</p>
              </div>
              <div>
                <p className="highlighted-text">Technologies</p>
                <p>AWS, Android, Git, JUnit, React, React Native</p>
              </div>
            </div>

            <div className="skill-column">
              <div>
                <h1>Familiar</h1>
              </div>
              <div>
                <p className="highlighted-text">Languages</p>
                <p>Swift, C++, C, CSS, HTML5</p>
              </div>
              <div>
                <p className="highlighted-text">Technologies</p>
                <p>Azure, ARKit, Linux, Node, Spring, Express, MongoDB, iOS</p>
              </div>
            </div>

            <div className="skill-column">
              <div>
                <h1>Interested</h1>
              </div>
              <div>
                <p className="highlighted-text">Languages</p>
                <p>Go, Ruby, Kotlin</p>
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
  display: flex;
  flex-direction: column;

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
    font-size: calc(6px + 1vw);
    text-align: center;
  }
  
  h1 {
    font-size: calc(10px + 1vw);
  }

  .desc {
    padding-left: 50px;
    padding-right: 50px;
  }

  .life-images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 0 calc(8px + 2vw) 0;
  }

  .image {
    display: block;
    width: calc(60px + 9vw);
    height: 100%;
    margin: 0 calc(8px + 2vw) 0 calc(8px + 2vw);
    align-items: center;
    border-width: 1px;
    border-radius: 15px;
  }
`

export default AboutSection;