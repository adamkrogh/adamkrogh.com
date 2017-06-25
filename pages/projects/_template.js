import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';
import DocumentTitle from 'react-document-title';

import { config } from 'config';
import Intro from '../../components/Intro';

const NextButton = styled.div`
    text-align: center;

    a {
        display: inline-block;
        padding: 10px;
        margin-top: 40px;
        border: 1px solid black;
        text-align: center;
    }
`;

const StyledPage = styled.div`
    margin-bottom: 60px;

    h3 {
        font-size: 20px;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    img {
        margin-top: 20px;
    }

    p > a {
        color: ${props => props.color};

        &:hover {
            text-decoration: underline !important;
        }
    }
`;

class Template extends React.Component {
    getCurrentPage() {
        const path = this.props.location.pathname;
        const pages = this.props.route.pages;
        return pages.find(page => page.path === path);
    }

    renderNextProject() {
        const page = this.getCurrentPage();
        const { pages } = this.props.route;
        const currentId = page.data.id;
        const nextProject = pages
            .filter(page => page.data.layout === 'project')
            .find(page => page.data.id === currentId + 1);

        if (nextProject) {
            const { path, title } = nextProject.data;
            return (
                <NextButton>
                    <Link to={prefixLink(path)}>
                        Next Project: {title}
                    </Link>
                </NextButton>
            );
        }
        return null;
    }

    render() {
        const page = this.getCurrentPage();
        const { title, description, color, inverse } = page.data;
        return (
            <DocumentTitle title={`${title} - ${config.siteTitle}`}>
                <StyledPage color={color}>
                    <Intro
                        title={title}
                        description={description}
                        color={color}
                        inverse={inverse}
                    />
                    <section className="content">
                        <div className="container">
                            {this.props.children}
                            {this.renderNextProject()}
                        </div>
                    </section>
                </StyledPage>
            </DocumentTitle>
        );
    }
}

export default Template;
