import React from 'react';
import './App.css';
import Button from './Components/Button';
import styled from 'styled-components';
import ExperienceSection from './Components/ExperienceSection';
import { Link } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Style>
        <section id="home" className="app-header flex">
          <div className="text">
            Hi, I'm<span className="highlighted-text"> Nick Kazan </span>and I smol brain chad.
          </div>
          <Link to="experience" spy={true} smooth={true}>
            <Button text="see my experience"/>
          </Link>
        </section>
        <section id="experience" className="section-header flex">
          <Navbar className="navbar" color="light">
            <Nav className="row">
              <Link to="home" spy={true} smooth={true}>
                <Nav.Link className="navlink">Home</Nav.Link>
              </Link>
              <Link to="experience" spy={true} smooth={true}>
                <Nav.Link className="navlink">Experience</Nav.Link>
              </Link>
              <Link to="about-me" spy={true} smooth={true}>
                <Nav.Link className="navlink">About Me</Nav.Link>
              </Link>
              <Link to="contact" spy={true} smooth={true}>
                <Nav.Link className="navlink">Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar>
          <ExperienceSection title="Experience"/>
        </section>
      </Style>
    );
  }
}

const Style = styled.div `
  .link {
    text-decoration: none;
    color: white;
  }
  
  .row {
    display: flex;
    flex-direction: row;
    float: left;
  }

  .navbar {
    width: 100%;
    border-bottom: 1pt solid #119DA4;
  }

  .navlink {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-family: 'Merriweather Sans';
    font-smooth: auto;
    display: block;
    padding: 15px 10px;
    margin: 0 15px;

    :hover {
      color: #119DA4;
      cursor: pointer;
      transition: all .3s;
    }
  }
`

export default App;
