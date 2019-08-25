import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <StyledNavbar>
        <Navbar color="light">
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
      </StyledNavbar>
    );
  }
}

const StyledNavbar = styled.div `
  width: 100%;
  border-bottom: 1pt solid #119DA4;
  opacity: 1;
  background-color: #29292E;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;

  .link {
    text-decoration: none;
    color: white;
  }

  .row {
    display: flex;
    flex-direction: row;
    float: left;
  }

  .navlink {
    text-decoration: none;
    color: white;
    font-size: calc(8px + 1vw);
    font-family: 'Merriweather Sans';
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

export default NavBar;