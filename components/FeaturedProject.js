import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const ProjectTitle = styled.h3`
    text-transform: uppercase;
`;

export default class FeaturedProject extends React.Component {
    render() {
        const { page } = this.props;
        const { title, description, category } = page.data;
        return (
            <Link to={prefixLink(page.path)}>
                <div className="row project-row">
                    <div className="col-md-4">
                        <img
                            src="//placehold.it/720x440"
                            className="img-fluid"
                            alt={title}
                        />
                    </div>
                    <div className="col-md-8">
                        <header>
                            <ProjectTitle>{title}</ProjectTitle>
                            {category &&
                                category.split(',').map(cat => (
                                    <span
                                        className="badge badge-success"
                                        key={cat}
                                    >
                                        {cat}
                                    </span>
                                ))}
                        </header>
                        <p dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>
            </Link>
        );
    }
}
