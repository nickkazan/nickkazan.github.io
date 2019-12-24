import React from 'react';
import styled from 'styled-components'
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
            className="timeline-cuhacking"
            contentStyle={{ background: 'white', color: 'black', borderLeft: '2px solid #7c39bf', borderTop: '2px solid #7c39bf', borderRight: '2px solid #7c39bf'}}
            contentArrowStyle={{ borderRight: '7px solid  #7c39bf' }}
            date="Present"
            iconStyle={{ background: '#7c39bf', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title text-cuhacking">cuHacking 2020</h3>
            <h6 className="vertical-timeline-element-subtitle body-text">Ottawa, Canada</h6>
            <p className="body-text">I'm the Sponsorship Lead for cuHacking 2020. This year, I raised 200% of our financial goal, while
            also reaching an all-time high of 22 sponsors.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', borderLeft: '2px solid #ffaa3d', borderTop: '2px solid #ffaa3d', borderRight: '2px solid #ffaa3d' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffaa3d' }}
            date="April 2019"
            iconStyle={{ background: '#ffaa3d', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title text-nsnorth">NSNorth</h3>
            <h6 className="vertical-timeline-element-subtitle body-text">Montreal, Canada</h6>
            <p className="body-text">I was the Diversity Scholarship Recipient for NSNorth 2019.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', borderLeft: '2px solid #1ea6bf', borderTop: '2px solid #1ea6bf', borderRight: '2px solid #1ea6bf' }}
            contentArrowStyle={{ borderRight: '7px solid  #1ea6bf' }}
            date="March 2019"
            iconStyle={{ background: '#1ea6bf', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title text-csgames">CS Games</h3>
            <h6 className="vertical-timeline-element-subtitle body-text">Montreal, Canada</h6>
            <p className="body-text">I represented Carleton University at the CS Games competition. We placed within the top 10 out of over 30 teams.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', borderLeft: '2px solid #1e5939', borderTop: '2px solid #1e5939', borderRight: '2px solid #1e5939' }}
            contentArrowStyle={{ borderRight: '7px solid  #1e5939' }}
            date="January 2019, 2018, 2017"
            iconStyle={{ background: '#1e5939', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title text-cusec">CUSEC</h3>
            <h6 className="vertical-timeline-element-subtitle body-text">Montreal, Canada</h6>
            <p className="body-text">I attended CUSEC, the Canadian Software Engineering Conference, for 3 years in a row.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=""
            contentStyle={{ background: 'white', color: 'black', borderLeft: '2px solid #a30707', borderTop: '2px solid #a30707', borderRight: '2px solid #a30707' }}
            contentArrowStyle={{ borderRight: '7px solid  #a30707' }}
            date="January 2019, 2018, 2017"
            iconStyle={{ background: '#a30707', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title text-cuhacking-2">cuHacking</h3>
            <h6 className="vertical-timeline-element-subtitle body-text">Ottawa, Canada</h6>
            <p className="body-text">I competed in cuHacking's annual hackathon 2 years in a row, and then volunteered as a Sponsorship Coordinator in
            my third. I also won a cyberbullying reduction challenge in my first year.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', borderLeft: '2px solid #c86dc9', borderTop: '2px solid #c86dc9', borderRight: '2px solid #c86dc9' }}
            contentArrowStyle={{ borderRight: '7px solid  #c86dc9' }}
            date="September 2016"
            iconStyle={{ background: '#c86dc9', color: '#fff' }} >
            <h3 className="vertical-timeline-element-title text-btc">Beyond The Code</h3>
            <h6 className="vertical-timeline-element-subtitle body-text">Toronto, Canada</h6>
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
    align-items: center;
    border-radius: 15px;
    width: 100%;
  }

  .text-nsnorth {
    color: #ffaa3d;
  }

  .text-cuhacking {
    color: #7c39bf;
  }

  .text-cuhacking-2 {
    color: #a30707;
  }

  .text-csgames {
    color: #1ea6bf;
  }

  .text-cusec {
    color: #1e5939;
  }

  .text-btc {
    color: #c86dc9;
  }

  .body-text {
    color: black;
  }

  .timeline-cuhacking {
    align-items: center;
    justify-content: center;
  }

`

export default TimelineSection;