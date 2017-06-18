import React from 'react';
import { RouteHandler, Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const BaseLink = `
    font-family: "Karla", "Helvetica Neue", Helvetica, sans-serif !important;
    font-size: 16px;
    font-weight: normal;
    text-transform: uppercase;
    color: #f2f2f2;
    padding: 0;
    margin: 0;
    text-decoration: none;
`;

const HomeLink = styled(Link) `
    .navbar-brand {
        ${BaseLink}
    }
`;

const AboutLink = styled(Link) `
    ${BaseLink}
    &:hover, &:active, &:focus {
        color: #f2f2f2;;
    }
`;

class Navbar extends React.Component {
    render() {
        const { location, title } = this.props;
        return (
            <nav className="navbar sticky-top navbar-inverse bg-inverse">
                <div className="container">
                    <HomeLink to={prefixLink('/')}>
                        <h1 className="navbar-brand">{title}</h1>
                    </HomeLink>
                    <AboutLink
                        to={prefixLink('/profile/')}
                        className="sliding float-right"
                    >
                        About & Contact
                    </AboutLink>
                </div>
            </nav>
        );
    }
}

export default Navbar;
