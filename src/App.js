import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Link } from "react-scroll";
import NavBar from './Components/Navbar';
import ExperienceSection from './Components/ExperienceSection';
import Button from './Components/Button';
import ContactSection from './Components/ContactSection';

class App extends React.Component {

  render() {
    return (
      <Style className="app-header flex">
        <section id="home" className="app-header flex">
          <div className="title">
            Hi, I'm<span className="highlighted-text"> Nick Kazan </span>and I'm a Software Engineer.
          </div>
          <Link to="experience" spy={true} smooth={true}>
            <Button text="see my experience"/>
          </Link>
        </section>
        <NavBar/>
        <section id="experience" className="section-header flex">
          <ExperienceSection title="Experience"/>
        </section>
        <section id="contact" className="section-header flex centered">
          <ContactSection title="Let's Get In Touch"/>
        </section>
      </Style>
    );
  }  
}

const Style = styled.div `
  .centered {
    justify-contents: center;
    align-items: center;
  }
`

export default App;
