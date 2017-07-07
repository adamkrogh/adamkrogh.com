import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const StyledProject = styled(Link)`
    display: block;
    margin: 60px 0;
`;

const Description = styled.p`
    margin-bottom: 0.7rem;
`;

const Categories = styled.div`
    font-style: italic;
    line-height: 1.1;
    font-size: 0.9em;
    color: #999;
`;

class FeaturedProject extends React.Component {
    render() {
        const { page } = this.props;
        const { title, description, category } = page.data;
        return (
            <StyledProject to={prefixLink(page.path)}>
                <div className="row align-items-center featured">
                    <div className="col-md-5">
                        <img
                            src="https://placehold.it/600x400"
                            className="img-fluid"
                            alt={title}
                        />
                    </div>
                    <div className="col-md-5 offset-md-1 col-sm-7 offset-sm-1 featured-body mt-sm-0">
                        <header>
                            <h3 className="h2 hover-underline inverse">{title}</h3>
                        </header>
                        <Description dangerouslySetInnerHTML={{ __html: description }} />
                        <Categories>{category.replace(',', ', ')}</Categories>
                    </div>
                </div>
            </StyledProject>
        );
    }
}

export default FeaturedProject;
