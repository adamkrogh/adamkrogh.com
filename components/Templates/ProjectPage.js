import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

import Intro from '../Intro';

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

    h2 {
        font-size: 20px;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`;

class ProjectPage extends React.Component {
    renderNextProject() {
        const { page, pages } = this.props.route;
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
        const { page } = this.props.route;
        const { title, description, category, body, color } = page.data;
        return (
            <StyledPage>
                <Intro color={color}>
                    <div className="container">
                        <h1 className="display-3">{title}</h1>
                        <p className="lead ">
                            {description}
                        </p>
                    </div>
                </Intro>
                <section className="content">
                    <div className="container">
                        <div className="col-md-8 offset-md-2">
                            <div dangerouslySetInnerHTML={{ __html: body }} />
                            {this.renderNextProject()}
                        </div>
                    </div>
                </section>
            </StyledPage>
        );
    }
}

export default ProjectPage;
