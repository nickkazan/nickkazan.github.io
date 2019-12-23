import React from 'react';
import styled from 'styled-components'
import codeIcon from '../../assets/coding-icon.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class TimelineSection extends React.Component {
  render() {
    return (
      <StyledTimeline id="timeline">
        <div className="title text">
          {this.props.title}
        </div>
        <VerticalTimeline className="box">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Present"
            iconStyle={{ background: '#119DA4', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title title-text">cuHacking 2020</h3>
            <h6 className="vertical-timeline-element-subtitle subtitle-text">Ottawa, Canada</h6>
            <p className="body-text">I'm the Sponsorship Lead for cuHacking 2020. This year, I raised 200% of our financial goal, while
            also reaching an all-time high of 22 sponsors.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2019"
            iconStyle={{ background: '#119DA4', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title title-text">NSNorth</h3>
            <h6 className="vertical-timeline-element-subtitle subtitle-text">Montreal, Canada</h6>
            <p className="body-text">I was the Diversity Scholarship Recipient for NSNorth 2019.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="March 2019"
            iconStyle={{ background: '#119DA4', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title title-text">CS Games</h3>
            <h6 className="vertical-timeline-element-subtitle subtitle-text">Montreal, Canada</h6>
            <p className="body-text">I represented Carleton University at the CS Games competition. We placed within the top 10 out of over 30 teams.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="January 2019, 2018, 2017"
            iconStyle={{ background: '#119DA4', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title title-text">CUSEC</h3>
            <h6 className="vertical-timeline-element-subtitle subtitle-text">Montreal, Canada</h6>
            <p className="body-text">I attended CUSEC, the Canadian Software Engineering Conference, for 3 years in a row.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="January 2019, 2018, 2017"
            iconStyle={{ background: '#119DA4', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title title-text">cuHacking</h3>
            <h6 className="vertical-timeline-element-subtitle subtitle-text">Ottawa, Canada</h6>
            <p className="body-text">I competed in cuHacking's annual hackathon 2 years in a row, and then volunteered as a Sponsorship Coordinator in
            my third. I also won a cyberbullying reduction challenge in my first year.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2016"
            iconStyle={{ background: '#119DA4', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title title-text">Beyond The Code</h3>
            <h6 className="vertical-timeline-element-subtitle subtitle-text">Toronto, Canada</h6>
            <p className="body-text">I attended a diversity conference during the first month of my university degree.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </StyledTimeline>
    );
  }
}

const StyledTimeline = styled.div `
  padding: calc(20px + 1vw) calc(20px + 2vw) 0 calc(20px + 2vw);
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-direction: column;

  .box {
    background-color: #b0bebf;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    width: 100%;
  }

  .title-text {
    color: #119DA4;
  }

  .subtitle-text {
    color: #119DA4;
  }

  .body-text {
    color: black;
  }

`

export default TimelineSection;