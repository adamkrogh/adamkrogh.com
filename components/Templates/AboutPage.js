import React from 'react';
import styled from 'styled-components';

import DefaultPage from './DefaultPage';

const StyledDefaultPage = styled(DefaultPage)`
    margin-bottom: 60px;
`;

class AboutPage extends React.Component {
    render() {
        return <StyledDefaultPage {...this.props} />;
    }
}

export default AboutPage;
