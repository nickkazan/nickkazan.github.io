import React from 'react';
import './App.css';
import Button from './Components/Button';
import styled from 'styled-components';
import ExperienceSection from './Components/ExperienceSection';
import { Link } from "react-scroll";
import NavBar from './Components/Navbar';

class App extends React.Component {

  render() {
    return (
      <Style>
        <section id="home" className="app-header flex">
          <div className="text">
            Hi, I'm<span className="highlighted-text"> Nick Kazan </span>and I'm a Software Engineer.
          </div>
          <Link to="experience" spy={true} smooth={true}>
            <Button text="see my experience"/>
          </Link>
        </section>
        <section id="experience" className="section-header flex">
          <NavBar className="sticky"/>
          <ExperienceSection title="Experience"/>
        </section>
        <section id="contact" className="section-header flex">

        </section>
      </Style>
    );
  }  
}

const Style = styled.div `

`

export default App;
