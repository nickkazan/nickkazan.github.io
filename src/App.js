import React from 'react';
import './App.css';
import Button from './Components/Button';
import styled from 'styled-components';
import Section from './Components/Section';

class App extends React.Component {
  render() {
    return (
      <Style>
        <section class="App-header flex">
          <div class="text">
            Hi, I'm<span class="highlighted-text"> Nick Kazan </span>and I smol brain chad.
          </div>
          <a href="#experience" className="link">
            <Button text="see my experience"/>
          </a>
        </section>
        <section id="experience" class="flex">
          <div>
            <Section title="Experience"/>
          </div>
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
`

export default App;
