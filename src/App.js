import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Link } from "react-scroll";
import NavBar from './Components/Navbar';
import ExperienceSection from './Components/ExperienceSection';
import Button from './Components/Button';
import ContactSection from './Components/ContactSection';
import AboutSection from './Components/AboutSection';
import TimelineSection from './Components/TimelineSection';

class App extends React.Component {

  render() {
    return (
      <Style className="light-header">
        <section id="home" className="light-header">
          <div className="title">
            Hi, I'm <span className="highlighted-text">Nick Kazan</span> and I'm a Software Developer.
          </div>
          <Link to="experience" spy={true} smooth={true}>
            <Button text="see my experience"/>
          </Link>
        </section>
        <NavBar/>

        <ExperienceSection title="Experience"/>
        <AboutSection title="About Me"/>
        <TimelineSection title="Timeline"/>
        <ContactSection title="Let's Get In Touch"/>

      </Style>
    );
  }  
}

const Style = styled.div `
  .centered {
    justify-contents: center;
    align-items: center;
  }

  .main {
    padding: 0;
  }
`

export default App;
