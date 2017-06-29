import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const StyledProject = styled.div`
    padding: 20px 0;
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
            <Link to={prefixLink(page.path)}>
                <StyledProject className="row align-items-center featured">
                    <div className="col-md-5">
                        <LazyLoad height={300} offset={100} once>
                            <ReactCSSTransitionGroup
                                transitionName="fade"
                                transitionAppear
                                transitionAppearTimeout={500}
                                transitionEnter={false}
                                transitionLeave={false}
                            >
                                <img
                                    src={require(`../assets/${image}`)}
                                    className="img-fluid"
                                    alt={title}
                                />
                            </ReactCSSTransitionGroup>
                        </LazyLoad>
                    </div>
                    <div className="col-md-5 offset-md-1 col-sm-7 offset-sm-1 featured-body mt-sm-0">
                        <header>
                            <h3 className="h2 inverse">{title}</h3>
                        </header>
                        <p dangerouslySetInnerHTML={{ __html: description }} />
                        <div>
                            {category &&
                                category
                                    .split(',')
                                    .map(label => (
                                        <Tag key={label}>{label}</Tag>
                                    ))}
                        </div>
                    </div>
                </StyledProject>
            </Link>
        );
    }
}

export default FeaturedProject;
