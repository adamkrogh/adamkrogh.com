import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const ProjectLink = styled(Link)`
    color: #2e3b41;
    text-transform: uppercase;
    margin-top: 20px;
`;

const Tag = styled.span`
    padding: 2px 4px;
    margin-right: 2px;
    color: #464a4c;
    font-size: 12px;
    border: 1px solid #464a4c;
    border-radius: 2px;
`;

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
                    </header>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                    <div>
                        {category &&
                            category
                                .split(',')
                                .map(label => <Tag key={label}>{label}</Tag>)}
                    </div>
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
