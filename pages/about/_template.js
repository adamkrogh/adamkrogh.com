import React from 'react';
import styled from 'styled-components';
import DocumentTitle from 'react-document-title';

import { config } from 'config';
import Intro from '../../components/Intro';

const StyledPage = styled.div`
    margin-bottom: 60px;
    
    h3 {
        font-size: 20px;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    
    p > a {
        color: ${props => props.color};
        text-decoration: underline !important;

        &:hover {
            text-decoration: none !important;
        }
    }
`;

class Template extends React.Component {
    getCurrentPage() {
        const path = this.props.location.pathname;
        const pages = this.props.route.pages;
        return pages.find(page => page.path === path);
    }

    render() {
        const page = this.getCurrentPage();
        const { title, description, color, inverse, fullpage } = page.data;
        return (
            <DocumentTitle title={`${title} - ${config.siteTitle}`}>
                <StyledPage color={color}>
                    <Intro
                        title="Adam Krogh"
                        description={description}
                        color={color}
                        inverse={inverse}
                        fullpage={fullpage}
                    />
                    <section className="content">
                        <div className="container">
                            {this.props.children}
                        </div>
                    </section>
                </StyledPage>
            </DocumentTitle>
        );
    }
}

export default Template;
