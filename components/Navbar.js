import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import styled from 'styled-components';

const BaseLink = `
    font-family: "Karla", "Helvetica Neue", Helvetica, sans-serif !important;
    font-size: 0.85em;
    font-weight: normal;
    text-transform: uppercase;
    color: #f2f2f2;
    padding: 0;
    margin: 0;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    ${BaseLink}
    &:hover, &:active, &:focus {
        color: #f2f2f2;;
    }
`;

class Navbar extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <nav className="navbar navbar-inverse bg-inverse">
                <div className="container">
                    <StyledLink to={prefixLink('/')} className="sliding">
                        {title}
                    </StyledLink>
                    <StyledLink
                        to={prefixLink('/about/')}
                        className="sliding float-right"
                        style={{ marginTop: '4px' }}
                    >
                        About & Contact
                    </StyledLink>
                </div>
            </nav>
        );
    }
}

export default Navbar;
