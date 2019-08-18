import React from 'react';
import styled from 'styled-components';

class Section extends React.Component {
    render() {
        return (
          <StyledSection class="flex">
            <div className="title">
                {this.props.title}
            </div>
          </StyledSection>
        );
    }
}

const StyledSection = styled.section `
    .title {
        font-size: 36px;
        align-content: center;
    }
`

export default Section;