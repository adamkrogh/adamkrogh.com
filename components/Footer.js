import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #292b2c;
    color: #ddd;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 80px 0px;
    margin-top: 0px;

    .about > * {
        margin-bottom: 15px;
    }
`;

const SocialIcon = styled.a`
    font-size: 32px;
    line-height: 32px;
    padding-right: 10px;
`;

const FooterButton = styled.a`
    font-size: 12px;
    display: inline-block;
    padding: 10px;
    border: 1px solid #fff;
    text-transform: uppercase;
`;

class Footer extends React.Component {
    render() {
        const { projects } = this.props;
        return (
            <StyledFooter>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 push-md-4 col-sm-12 projects">
                            <h4>Featured Projects</h4>
                            <ul className="list-unstyled">
                                {projects.map(project => (
                                    <li key={project.title}>
                                        <Link to={prefixLink(project.path)}>
                                            {project.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-4 pull-md-8 col-sm-12 about">
                            <Link to={prefixLink('/')}>
                                <h4>Adam Krogh</h4>
                            </Link>
                            <div>
                                <SocialIcon
                                    href="https://github.com/adamkrogh"
                                    target="_blank"
                                >
                                    <i className="fa fa-github" />
                                </SocialIcon>
                                <SocialIcon
                                    href="https://twitter.com/adamkrogh"
                                    target="_blank"
                                >
                                    <i className="fa fa fa-twitter" />
                                </SocialIcon>
                                <SocialIcon
                                    href="https://www.linkedin.com/in/adamkrogh"
                                    target="_blank"
                                >
                                    <i className="fa fa fa-linkedin" />
                                </SocialIcon>
                            </div>
                            <FooterButton href="#">
                                Download Resume
                            </FooterButton>
                        </div>
                    </div>
                </div>
            </StyledFooter>
        );
    }
}

export default Footer;
