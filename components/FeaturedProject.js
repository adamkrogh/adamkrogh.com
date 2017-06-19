import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const ProjectLink = styled(Link)`
    color: #2e3b41;
    text-transform: uppercase;
`;

const Category = ({ label }) => (
    <span className="badge badge-success">
        {label}
    </span>
);

class FeaturedProject extends React.Component {
    render() {
        const { page } = this.props;
        const { title, description, category, image } = page.data;
        return (
            <div className="row project-row align-items-center">
                <div className="col-md-5">
                    <img
                        src={require(`../assets/${image}`)}
                        className="img-fluid"
                        alt={title}
                    />
                </div>
                <div className="col-md-5 offset-md-1 col-sm-7 offset-sm-1">
                    <header>
                        <h3 className="h2">{title}</h3>
                        {category &&
                            category
                                .split(',')
                                .map(label => (
                                    <Category label={label} key={label} />
                                ))}
                    </header>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                    <ProjectLink
                        to={prefixLink(page.path)}
                        className="sliding inverse"
                    >
                        View Case Study
                    </ProjectLink>
                </div>
            </div>
        );
    }
}

export default FeaturedProject;
