import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Intro from 'components/Intro';

const StyledPage = styled.div`
    margin-bottom: 30px;
    
    h2 {
        margin-bottom: 30px;
        margin-top: 45px;
        
        &::before {
            border-color: ${props => props.color};
        }
    }

    .container > .row > div {
        margin-top: 0;
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
            <StyledPage color={color} className="page">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
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
        );
    }
}

export default Template;
